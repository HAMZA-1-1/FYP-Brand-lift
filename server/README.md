# Backend Server for Brand Lift

Express.js backend server with MongoDB integration for feedback storage.

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Create `.env` file:**
```bash
cp .env.example .env
```

3. **Update `.env` with your MongoDB connection:**
```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=brandlift
PORT=3001
```

4. **Start the server:**
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## MongoDB Connection

### Local MongoDB (MongoDB Compass)

1. Install MongoDB Community Server
2. Start MongoDB service
3. Open MongoDB Compass
4. Connect using: `mongodb://localhost:27017`
5. Use this connection string in `.env`

### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

## API Endpoints

- `POST /api/feedback` - Submit feedback
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "Great app!"
  }
  ```

- `GET /api/feedback` - Get all feedback (for admin)

- `GET /health` - Health check

## Testing

Test the API with curl:

```bash
curl -X POST http://localhost:3001/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test feedback"
  }'
```

## Troubleshooting

- **Port already in use**: Change `PORT` in `.env`
- **MongoDB connection failed**: Verify MongoDB is running and connection string is correct
- **CORS errors**: Backend includes CORS middleware, ensure frontend uses correct API URL

