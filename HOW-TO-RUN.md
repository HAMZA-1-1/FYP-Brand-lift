# 🚀 How to Run the Application

## Step-by-Step Guide

### Prerequisites
1. ✅ MongoDB installed and running
2. ✅ Node.js installed
3. ✅ All dependencies installed (`npm install`)

---

## Method 1: Run Both Servers (Recommended)

### Terminal 1: Backend Server (MongoDB API)

Open PowerShell and run:
```powershell
cd server
npm start
```

You should see:
```
✅ Connected to MongoDB successfully
✅ Created collection: feedback
✅ Created collection: surveyResults
✅ Created collection: users
🚀 Server running on http://localhost:3001
```

**Keep this terminal open!**

### Terminal 2: Frontend Server (React App)

Open a **NEW** PowerShell window and run:
```powershell
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Keep this terminal open too!**

### Open Browser
Go to: `http://localhost:5173`

---

## Method 2: Using Batch Files (Windows)

### Start Backend:
Double-click: `start-backend.bat`

### Start Frontend:
Open PowerShell in project root and run:
```powershell
npm run dev
```

---

## Troubleshooting

### Issue: PowerShell Execution Policy Error (npm cannot be loaded)

**This happens when PowerShell blocks script execution. Try these solutions:**

**Solution A: Bypass execution policy for current session (Quick Fix)**
```powershell
# Run this command first, then run npm install
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm install
```

**Solution B: Change execution policy for current user (Permanent Fix)**
```powershell
# Run PowerShell as Administrator, then:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# Then run npm install normally
npm install
```

**Solution C: Use Command Prompt instead**
```cmd
# Open Command Prompt (cmd) instead of PowerShell
# Then run:
npm install
```

**Solution D: Use npm.cmd directly**
```powershell
# Use the .cmd version instead
& "C:\Program Files\nodejs\npm.cmd" install
```

---

### Issue: `npm run dev` not working in PowerShell

**Solution 1: Check if you're in the right directory**
```powershell
# Make sure you're in the project root
cd C:\Users\WAJID\Desktop\hamxa\Fyp-2-Brand-Lift--main
npm run dev
```

**Solution 2: Check if node_modules exists**
```powershell
# If node_modules doesn't exist, install dependencies
npm install
```

**Solution 3: Clear cache and reinstall**
```powershell
# Remove node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

**Solution 4: Check for port conflicts**
```powershell
# If port 5173 is in use, Vite will use the next available port
# Check the terminal output for the actual port
```

**Solution 5: Run with explicit command**
```powershell
# Instead of npm run dev, try:
npx vite
```

### Issue: Backend server not starting

**Check MongoDB is running:**
1. Open MongoDB Compass
2. Try connecting to: `mongodb://localhost:27017`
3. If it fails, start MongoDB service:
   - Press `Win + R`
   - Type `services.msc`
   - Find "MongoDB" service
   - Right-click → Start

**Check if port 3001 is available:**
```powershell
# Check what's using port 3001
netstat -ano | findstr :3001
```

### Issue: "Cannot find module" errors

**Reinstall dependencies:**
```powershell
# In project root
npm install

# In server directory
cd server
npm install
cd ..
```

---

## Quick Start Commands

### Windows PowerShell (Project Root):
```powershell
# Terminal 1 - Backend
cd server; npm start

# Terminal 2 - Frontend (new window)
npm run dev
```

### Alternative - Run in Background:
```powershell
# Backend (runs in background)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm start"

# Frontend (runs in background)
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"
```

---

## Verify Everything is Working

1. ✅ Backend running on `http://localhost:3001`
   - Test: Open browser → `http://localhost:3001/health`
   - Should see: `{"status":"ok","message":"Server is running"}`

2. ✅ Frontend running on `http://localhost:5173`
   - Test: Open browser → `http://localhost:5173`
   - Should see: Your app homepage

3. ✅ MongoDB connected
   - Open MongoDB Compass
   - Connect to: `mongodb://localhost:27017`
   - See `brandlift` database with collections

---

## Common Errors & Solutions

### Error: "Port already in use"
**Solution:** Kill the process using the port or change the port in config

### Error: "MongoDB connection failed"
**Solution:** Make sure MongoDB service is running

### Error: "Cannot find module 'vite'"
**Solution:** Run `npm install` in project root

### Error: "EADDRINUSE: address already in use"
**Solution:** Close other instances or change port

---

## Need Help?

1. Check both terminals for error messages
2. Verify MongoDB is running
3. Make sure you're in the correct directory
4. Try restarting both servers
5. Check firewall/antivirus isn't blocking ports


