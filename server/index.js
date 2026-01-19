import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'brandlift';

let client;
let db;

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log('✅ Connected to MongoDB successfully');
    
    // Create collections if they don't exist
    const collections = ['feedback', 'surveyResults', 'users', 'consultations'];
    for (const collectionName of collections) {
      const existing = await db.listCollections({ name: collectionName }).toArray();
      if (existing.length === 0) {
        await db.createCollection(collectionName);
        console.log(`✅ Created collection: ${collectionName}`);
      }
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Submit feedback endpoint
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Insert feedback into MongoDB
    const feedback = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      message: message.trim(),
      createdAt: new Date(),
    };

    const result = await db.collection('feedback').insertOne(feedback);

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      id: result.insertedId,
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({
      error: 'Failed to submit feedback. Please try again later.',
    });
  }
});

// Get all feedback (optional - for admin purposes)
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await db
      .collection('feedback')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.json({
      success: true,
      data: feedbacks,
      count: feedbacks.length,
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({
      error: 'Failed to fetch feedback.',
    });
  }
});

// Submit survey results endpoint
app.post('/api/survey-results', async (req, res) => {
  try {
    // Log the full request body for debugging
    console.log('📥 Received POST /api/survey-results');
    console.log('📦 Request body:', JSON.stringify(req.body, null, 2));
    
    const { userId, email, answers, results, action, fullName, passwordHash } = req.body;

    // Strict validation - reject user login data
    if (action || fullName || passwordHash !== undefined) {
      console.error('❌ INVALID: User login data detected in survey-results endpoint!');
      console.error('❌ Received data:', { action, fullName, passwordHash: passwordHash !== undefined });
      console.error('❌ Full body:', req.body);
      return res.status(400).json({ 
        error: 'Invalid data: This endpoint is for survey results only. User login data should be sent to /api/users' 
      });
    }

    // Validation - ensure survey data is present
    if (!answers || !results) {
      return res.status(400).json({ 
        error: 'Answers and results are required' 
      });
    }

    // Ensure answers and results are objects, not user data
    if (typeof answers !== 'object' || answers === null || Array.isArray(answers)) {
      return res.status(400).json({ 
        error: 'Answers must be an object' 
      });
    }

    if (typeof results !== 'object') {
      return res.status(400).json({ 
        error: 'Results must be an object' 
      });
    }

    // Insert survey results into MongoDB - ONLY survey data
    // Explicitly create object with ONLY allowed fields to prevent any data leakage
    const surveyData = {
      userId: userId || null,
      email: email || null,
      answers: answers,
      results: results,
      createdAt: new Date(),
    };

    // Double-check: Remove any user login fields that might have snuck in
    delete surveyData.action;
    delete surveyData.fullName;
    delete surveyData.passwordHash;
    delete surveyData.lastLogin;
    delete surveyData.updatedAt;

    // Log what we're about to save
    console.log('✅ Saving to surveyResults collection:');
    console.log('   - userId:', surveyData.userId);
    console.log('   - email:', surveyData.email);
    console.log('   - answers keys:', Object.keys(surveyData.answers || {}));
    console.log('   - results keys:', Object.keys(surveyData.results || {}));
    console.log('   - Final data keys:', Object.keys(surveyData));
    
    const result = await db.collection('surveyResults').insertOne(surveyData);
    console.log('✅ Successfully saved survey result with ID:', result.insertedId);

    res.status(201).json({
      success: true,
      message: 'Survey results saved successfully',
      id: result.insertedId,
    });
  } catch (error) {
    console.error('Error saving survey results:', error);
    res.status(500).json({
      error: 'Failed to save survey results. Please try again later.',
    });
  }
});

// Get survey results for a user
app.get('/api/survey-results', async (req, res) => {
  try {
    const { userId, email } = req.query;
    const query = {};
    
    if (userId) query.userId = userId;
    if (email) query.email = email;

    const surveyResults = await db
      .collection('surveyResults')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    res.json({
      success: true,
      data: surveyResults,
      count: surveyResults.length,
    });
  } catch (error) {
    console.error('Error fetching survey results:', error);
    res.status(500).json({
      error: 'Failed to fetch survey results.',
    });
  }
});

// Save user login/signup details
app.post('/api/users', async (req, res) => {
  try {
    // Log the full request body for debugging
    console.log('📥 Received POST /api/users');
    console.log('📦 Request body:', JSON.stringify(req.body, null, 2));
    
    const { userId, email, fullName, action, passwordHash, answers, results } = req.body;

    // Strict validation - reject survey data
    if (answers || results) {
      console.error('❌ INVALID: Survey data detected in users endpoint!');
      console.error('❌ Received data:', { answers: !!answers, results: !!results });
      console.error('❌ Full body:', req.body);
      return res.status(400).json({ 
        error: 'Invalid data: This endpoint is for user login/signup only. Survey data should be sent to /api/survey-results' 
      });
    }

    // Validation
    if (!email || !action) {
      return res.status(400).json({ 
        error: 'Email and action are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }

    // Validate action
    if (action !== 'login' && action !== 'signup') {
      return res.status(400).json({ 
        error: 'Action must be either "login" or "signup"' 
      });
    }

    // Insert or update user in MongoDB - ONLY user data
    // Explicitly create object with ONLY allowed fields to prevent any data leakage
    const userData = {
      userId: userId || `user-${Date.now()}`,
      email: email.trim(),
      fullName: fullName ? fullName.trim() : null,
      passwordHash: passwordHash || null, // In production, always hash passwords
      lastLogin: action === 'login' ? new Date() : null,
      createdAt: action === 'signup' ? new Date() : null,
      updatedAt: new Date(),
    };

    // Double-check: Remove any survey fields that might have snuck in
    delete userData.answers;
    delete userData.results;

    // Log what we're about to save
    console.log(`✅ Saving user ${action} to users collection:`);
    console.log('   - userId:', userData.userId);
    console.log('   - email:', userData.email);
    console.log('   - fullName:', userData.fullName);
    console.log('   - action:', action);
    console.log('   - Final userData keys:', Object.keys(userData));
    
    // Use upsert to update if exists, insert if not
    const result = await db.collection('users').updateOne(
      { email: email.trim() },
      { 
        $set: userData,
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );
    console.log('✅ Successfully saved user with result:', result.upsertedId || 'updated existing');

    res.status(201).json({
      success: true,
      message: `User ${action} recorded successfully`,
      id: result.upsertedId || result.matchedCount,
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({
      error: 'Failed to save user details. Please try again later.',
    });
  }
});

// Get user details
app.get('/api/users', async (req, res) => {
  try {
    const { userId, email } = req.query;
    const query = {};
    
    if (userId) query.userId = userId;
    if (email) query.email = email;

    const users = await db
      .collection('users')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    // Remove password hash from response
    const safeUsers = users.map(user => {
      const { passwordHash, ...safeUser } = user;
      return safeUser;
    });

    res.json({
      success: true,
      data: safeUsers,
      count: safeUsers.length,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      error: 'Failed to fetch users.',
    });
  }
});

// Send consultation email / Book appointment
app.post('/api/consultation-request', async (req, res) => {
  try {
    // Log incoming request
    console.log('📥 Received POST /api/consultation-request');
    console.log('📦 Request body:', JSON.stringify(req.body, null, 2));
    
    const { name, email, phone, message, appointmentDate, appointmentTime, appointmentMode, type } = req.body;
    const recipientEmail = 'hamzasyedmuhammad08@gmail.com';

    // Basic validation
    if (!name || !email) {
      console.error('❌ Validation failed: name and email are required');
      return res.status(400).json({
        success: false,
        error: 'Name and email are required fields.',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('❌ Validation failed: invalid email format');
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.',
      });
    }

    // Save consultation request to MongoDB first (so we don't lose the request)
    const consultationData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : null,
      message: message ? message.trim() : null,
      type: type || 'general', // 'appointment' or 'general'
      appointmentDate: appointmentDate || null,
      appointmentTime: appointmentTime || null,
      appointmentMode: appointmentMode || null, // 'online' or 'offline'
      createdAt: new Date(),
    };

    console.log('💾 Saving consultation data to MongoDB:', consultationData);

    let savedToDb = false;
    try {
      // Check if database is connected
      if (!db) {
        console.error('❌ Database connection not available');
        throw new Error('Database connection not available. Please check MongoDB service.');
      }
      
      const result = await db.collection('consultations').insertOne(consultationData);
      savedToDb = true;
      console.log('✅ Consultation request saved to MongoDB with ID:', result.insertedId);
    } catch (dbError) {
      console.error('❌ Error saving to MongoDB:', dbError);
      console.error('❌ Error details:', dbError.message);
      // Return error if DB save fails
      return res.status(500).json({
        success: false,
        error: 'Failed to save appointment. Please check if MongoDB is running and try again.',
        details: process.env.NODE_ENV === 'development' ? dbError.message : undefined,
      });
    }

    // Try to send email (optional - won't fail the request if email fails)
    let emailSent = false;
    const hasEmailConfig = process.env.EMAIL_USER && 
                          process.env.EMAIL_PASS && 
                          process.env.EMAIL_USER !== 'your-email@gmail.com' &&
                          process.env.EMAIL_PASS !== 'your-app-password';
    
    if (hasEmailConfig) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Build email subject and content based on type
        const isAppointment = type === 'appointment' && appointmentDate && appointmentTime;
        const subject = isAppointment 
          ? `New Appointment Booking - ${name || 'Customer'} - ${appointmentDate}`
          : 'New Digital Marketing Consultation Request - Brand Lift';
        
        let emailContent = `
          <h2>${isAppointment ? 'New Appointment Booking' : 'New Consultation Request'}</h2>
          <p><strong>Name:</strong> ${name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        `;
        
        if (isAppointment) {
          emailContent += `
            <p><strong>Appointment Date:</strong> ${new Date(appointmentDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time Slot:</strong> ${appointmentTime}</p>
            <p><strong>Mode:</strong> ${appointmentMode === 'online' ? 'Online (Video Call)' : 'Offline (In-Person)'}</p>
          `;
        }
        
        emailContent += `
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <p><strong>Requested At:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p>This is an automated email from Brand Lift platform.</p>
        `;

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: recipientEmail,
          subject: subject,
          html: emailContent,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('✅ Consultation email sent successfully');
      } catch (emailError) {
        console.warn('⚠️ Email sending failed:', emailError.message);
        // Don't fail the request - it's already saved to MongoDB
      }
    } else {
      console.log('ℹ️ Email credentials not configured - request saved to MongoDB only');
      console.log('   To enable email, set EMAIL_USER and EMAIL_PASS in server/.env');
    }

    // Always return success - request is saved to MongoDB
    const isAppointment = type === 'appointment' && appointmentDate && appointmentTime;
    const successMessage = isAppointment
      ? 'Your appointment has been booked successfully! We will send you a confirmation email within 24 hours.'
      : 'Your consultation request has been received. We will respond within 24 hours.';

    console.log('✅ Sending success response');
    res.status(200).json({
      success: true,
      message: successMessage,
      emailSent: emailSent,
      appointmentBooked: isAppointment,
    });
  } catch (error) {
    console.error('❌ Error processing consultation request:', error);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({
      success: false,
      error: 'Failed to process consultation request. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// 404 handler for undefined routes
app.use((req, res) => {
  console.log(`⚠️ 404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    error: `Route not found: ${req.method} ${req.path}`,
    availableRoutes: [
      'GET /health',
      'POST /api/feedback',
      'GET /api/feedback',
      'POST /api/survey-results',
      'GET /api/survey-results',
      'POST /api/users',
      'GET /api/users',
      'POST /api/consultation-request',
    ],
  });
});

// Start server
async function startServer() {
  await connectToMongoDB();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 MongoDB URI: ${MONGODB_URI}`);
    console.log(`💾 Database: ${DB_NAME}`);
    console.log(`📋 Available routes:`);
    console.log(`   POST /api/consultation-request - Book appointment`);
    console.log(`   POST /api/feedback - Submit feedback`);
    console.log(`   POST /api/survey-results - Save survey results`);
    console.log(`   POST /api/users - Save user data`);
  });
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  if (client) {
    await client.close();
    console.log('✅ MongoDB connection closed');
  }
  process.exit(0);
});

startServer();

