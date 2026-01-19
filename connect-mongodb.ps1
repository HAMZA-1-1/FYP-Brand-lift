# MongoDB Connection Script for PowerShell
# This script connects to MongoDB and shows your data

Write-Host "🔌 Connecting to MongoDB..." -ForegroundColor Cyan

# Method 1: Using mongosh (MongoDB Shell)
# Make sure mongosh is installed and in your PATH

# Connect to MongoDB
Write-Host "`n📊 Connecting to: mongodb://localhost:27017" -ForegroundColor Yellow
mongosh mongodb://localhost:27017

# After connecting, you can run these commands in mongosh:
# use brandlift
# show collections
# db.surveyResults.find().pretty()
# db.users.find().pretty()
# db.feedback.find().pretty()

