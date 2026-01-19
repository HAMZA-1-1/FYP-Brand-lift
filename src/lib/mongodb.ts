// MongoDB API client
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface FeedbackData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface FeedbackResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface SurveyResultsData {
  userId?: string;
  email?: string;
  answers: Record<string, any>;
  results: any;
}

export interface SurveyResultsResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface UserData {
  userId?: string;
  email: string;
  fullName?: string;
  action: 'login' | 'signup';
  passwordHash?: string;
}

export interface UserResponse {
  success: boolean;
  message: string;
  id?: string;
}

export async function submitFeedback(data: FeedbackData): Promise<FeedbackResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit feedback');
    }

    return await response.json();
  } catch (error) {
    // Fallback to localStorage if API is not available
    if (error instanceof Error && error.message.includes('Failed to fetch')) {
      console.warn('API not available, using localStorage fallback');
      const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
      feedbacks.push({
        ...data,
        created_at: new Date().toISOString(),
      });
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
      return {
        success: true,
        message: 'Feedback saved locally (API unavailable)',
      };
    }
    throw error;
  }
}

// Save survey results to MongoDB
export async function saveSurveyResults(data: SurveyResultsData): Promise<SurveyResultsResponse> {
  // Validate that we're not accidentally sending user login data
  if ('action' in data || 'fullName' in data || 'passwordHash' in data) {
    console.error('❌ Error: User login data detected in saveSurveyResults. This should not happen.');
    throw new Error('Invalid data: Survey results cannot contain user login fields (action, fullName, passwordHash)');
  }

  // Ensure required survey fields are present
  if (!data.answers || !data.results) {
    throw new Error('Invalid data: answers and results are required for survey results');
  }

  try {
    // Only send survey-specific data
    const surveyPayload = {
      userId: data.userId,
      email: data.email,
      answers: data.answers,
      results: data.results,
    };

    console.log('📊 Saving survey results to MongoDB...');
    console.log('📤 Sending to:', `${API_BASE_URL}/api/survey-results`);
    console.log('📦 Payload keys:', Object.keys(surveyPayload));
    console.log('📦 Payload:', JSON.stringify(surveyPayload, null, 2));
    
    // Double-check: Ensure we're not sending any user login fields
    if ('action' in surveyPayload || 'fullName' in surveyPayload || 'passwordHash' in surveyPayload) {
      console.error('❌ CRITICAL ERROR: User login fields found in survey payload!');
      console.error('❌ Payload:', surveyPayload);
      throw new Error('CRITICAL: User login data detected in survey payload');
    }
    
    const response = await fetch(`${API_BASE_URL}/api/survey-results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(surveyPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save survey results');
    }

    return await response.json();
  } catch (error) {
    // Fallback to localStorage if API is not available
    if (error instanceof Error && error.message.includes('Failed to fetch')) {
      console.warn('API not available, using localStorage fallback for survey results');
      const surveyResults = JSON.parse(localStorage.getItem('surveyResults') || '[]');
      surveyResults.push({
        ...data,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('surveyResults', JSON.stringify(surveyResults));
      return {
        success: true,
        message: 'Survey results saved locally (API unavailable)',
      };
    }
    throw error;
  }
}

// Save user login/signup details to MongoDB
export async function saveUserDetails(data: UserData): Promise<UserResponse> {
  // Validate that we're not accidentally sending survey data
  if ('answers' in data || 'results' in data) {
    console.error('❌ Error: Survey data detected in saveUserDetails. This should not happen.');
    throw new Error('Invalid data: User details cannot contain survey fields (answers, results)');
  }

  // Ensure required user fields are present
  if (!data.email || !data.action) {
    throw new Error('Invalid data: email and action are required for user details');
  }

  try {
    // Only send user-specific data
    const userPayload = {
      userId: data.userId,
      email: data.email,
      fullName: data.fullName,
      action: data.action,
      passwordHash: data.passwordHash,
    };

    console.log(`👤 Saving user ${data.action} to MongoDB...`);
    console.log('📤 Sending to:', `${API_BASE_URL}/api/users`);
    console.log('📦 Payload:', JSON.stringify({ ...userPayload, passwordHash: userPayload.passwordHash ? '[HIDDEN]' : null }, null, 2));
    const response = await fetch(`${API_BASE_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save user details');
    }

    return await response.json();
  } catch (error) {
    // Silently fail for user logging - don't interrupt auth flow
    console.warn('Failed to save user details to MongoDB:', error);
    return {
      success: false,
      message: 'User details not saved to database',
    };
  }
}

