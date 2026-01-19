import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { AuthUser } from '../types/auth';
import { saveUserDetails } from '../lib/mongodb';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return url && key && url !== 'https://placeholder.supabase.co' && key !== 'placeholder-key';
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const useMockAuth = !isSupabaseConfigured();
  
  // Initialize user state from localStorage if in mock mode
  const getInitialUser = (): AuthUser | null => {
    if (useMockAuth && typeof window !== 'undefined') {
      const mockUser = localStorage.getItem('mockUser');
      if (mockUser) {
        try {
          return JSON.parse(mockUser);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  };

  const [user, setUser] = useState<AuthUser | null>(getInitialUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (useMockAuth) {
      // Mock mode - check localStorage for existing session (double-check on mount)
      const mockUser = localStorage.getItem('mockUser');
      if (mockUser) {
        try {
          setUser(JSON.parse(mockUser));
        } catch (e) {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
      return;
    }

    // Real Supabase mode
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            user_metadata: session.user.user_metadata,
          });
        }
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          user_metadata: session.user.user_metadata,
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription?.unsubscribe();
  }, [useMockAuth]);

  const signUp = async (email: string, password: string, fullName: string) => {
    let userId: string;
    
    if (useMockAuth) {
      // Mock sign up - just create a mock user
      userId = `mock-${Date.now()}`;
      const mockUser: AuthUser = {
        id: userId,
        email,
        user_metadata: { full_name: fullName },
      };
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      setUser(mockUser);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;
      userId = data.user?.id || '';
    }

    // Save user details to MongoDB
    try {
      await saveUserDetails({
        userId: userId,
        email: email,
        fullName: fullName,
        action: 'signup',
      });
    } catch (error) {
      console.warn('Failed to save signup details to MongoDB:', error);
      // Don't throw - auth should succeed even if MongoDB save fails
    }
  };

  const signIn = async (email: string, password: string) => {
    let userId: string;
    let fullName: string | undefined;

    if (useMockAuth) {
      // Mock sign in - allow "a" and "1" for testing
      if (email === 'a' && password === '1') {
        userId = 'mock-user-123';
        fullName = 'Test User';
        const mockUser: AuthUser = {
          id: userId,
          email: 'a',
          user_metadata: { full_name: fullName },
        };
        localStorage.setItem('mockUser', JSON.stringify(mockUser));
        setUser(mockUser);
      } else {
        throw new Error('Invalid credentials. Use email: "a" and password: "1" for testing.');
      }
    } else {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        userId = data.user?.id || '';
        fullName = data.user?.user_metadata?.full_name;
      } catch (error) {
        if (error instanceof Error && error.message.includes('Failed to fetch')) {
          throw new Error('Unable to connect to authentication service. Please check your internet connection or Supabase configuration.');
        }
        throw error;
      }
    }

    // Save login details to MongoDB
    try {
      await saveUserDetails({
        userId: userId,
        email: email,
        fullName: fullName,
        action: 'login',
      });
    } catch (error) {
      console.warn('Failed to save login details to MongoDB:', error);
      // Don't throw - auth should succeed even if MongoDB save fails
    }
  };

  const signOut = async () => {
    if (useMockAuth) {
      localStorage.removeItem('mockUser');
      setUser(null);
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
