# MongoDB Setup Guide

This guide will help you set up MongoDB Compass and connect it to the Brand Lift application.

## Prerequisites

1. **MongoDB Community Server** - Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. **MongoDB Compass** - Download from [MongoDB Compass](https://www.mongodb.com/products/compass)
3. **Node.js** - Already installed (for running the backend server)

## Step 1: Install MongoDB Community Server

1. Download MongoDB Community Server for Windows
2. Run the installer
3. Choose "Complete" installation
4. Install MongoDB as a Windows Service (recommended)
5. Install MongoDB Compass (GUI tool)

## Step 2: Start MongoDB

MongoDB should start automatically as a Windows Service. If not:

1. Open Services (Win + R, type `services.msc`)
2. Find "MongoDB" service
3. Right-click and select "Start"

Or start manually:
```bash
mongod --dbpath "C:\data\db"
```

## Step 3: Connect MongoDB Compass

1. Open MongoDB Compass
2. Use the default connection string: `mongodb://localhost:27017`
3. Click "Connect"

## Step 4: Set Up Backend Server

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `server` directory:
```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=brandlift
PORT=3001
```

4. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
✅ Connected to MongoDB successfully
✅ Created collection: feedback
🚀 Server running on http://localhost:3001
```

## Step 5: Configure Frontend

1. Create a `.env` file in the root directory (if not exists):
```env
VITE_API_URL=http://localhost:3001
```

2. Restart your frontend dev server:
```bash
npm run dev
```

## Step 6: Verify Connection

1. Submit feedback through the application
2. Open MongoDB Compass
3. Select the `brandlift` database
4. Open the `feedback` collection
5. You should see your feedback entries!

## Database Structure

The feedback collection will have the following structure:

```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",  // optional
  message: "Great app!",
  createdAt: ISODate("2024-01-01T12:00:00.000Z")
}
```

## Troubleshooting

### MongoDB not starting
- Check if port 27017 is already in use
- Verify MongoDB service is running in Services
- Check MongoDB logs in `C:\Program Files\MongoDB\Server\{version}\log\`

### Connection refused
- Ensure MongoDB is running
- Check firewall settings
- Verify connection string in `.env`

### API not responding
- Ensure backend server is running on port 3001
- Check CORS settings
- Verify `VITE_API_URL` in frontend `.env`

## Using MongoDB Atlas (Cloud)

If you prefer cloud hosting:

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `server/.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=brandlift
PORT=3001
```

## API Endpoints

- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback (for admin)
- `GET /health` - Health check

