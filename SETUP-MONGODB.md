# Complete MongoDB Setup Guide

## ✅ Quick Setup (3 Steps)

### Step 1: Install MongoDB
1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will start automatically as a Windows Service

### Step 2: Start Backend Server
**Windows:**
```bash
start-backend.bat
```

**Mac/Linux:**
```bash
chmod +x start-backend.sh
./start-backend.sh
```

**Or manually:**
```bash
cd server
npm start
```

### Step 3: Start Frontend
In a new terminal:
```bash
npm run dev
```

## 🎯 That's It!

Your feedback will now be saved to MongoDB!

## 📊 View Feedback in MongoDB Compass

1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Open database: `brandlift`
4. Open collection: `feedback`
5. See all your feedback entries!

## 🔧 Configuration

The backend server is configured in `server/.env`:
```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=brandlift
PORT=3001
```

## 🚨 Troubleshooting

### MongoDB Not Running?
1. Open Services (Win + R → `services.msc`)
2. Find "MongoDB" service
3. Right-click → Start

### Port Already in Use?
Change `PORT=3001` to another port in `server/.env`

### Connection Error?
- Make sure MongoDB is installed and running
- Check MongoDB Compass can connect
- Verify connection string in `server/.env`

## 📝 Testing

Test the API:
```bash
curl -X POST http://localhost:3001/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test feedback"}'
```

Or just submit feedback through the app and check MongoDB Compass!

