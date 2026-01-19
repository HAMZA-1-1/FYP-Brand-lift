# MongoDB Commands for PowerShell
# Run these commands after connecting with mongosh

Write-Host "📋 MongoDB Commands Reference" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan

Write-Host "`n1. Connect to MongoDB:" -ForegroundColor Yellow
Write-Host "   mongosh mongodb://localhost:27017" -ForegroundColor White

Write-Host "`n2. Switch to your database:" -ForegroundColor Yellow
Write-Host "   use brandlift" -ForegroundColor White

Write-Host "`n3. Show all collections:" -ForegroundColor Yellow
Write-Host "   show collections" -ForegroundColor White

Write-Host "`n4. View all survey results:" -ForegroundColor Yellow
Write-Host "   db.surveyResults.find().pretty()" -ForegroundColor White

Write-Host "`n5. View all users:" -ForegroundColor Yellow
Write-Host "   db.users.find().pretty()" -ForegroundColor White

Write-Host "`n6. View all feedback:" -ForegroundColor Yellow
Write-Host "   db.feedback.find().pretty()" -ForegroundColor White

Write-Host "`n7. Count documents in a collection:" -ForegroundColor Yellow
Write-Host "   db.surveyResults.countDocuments()" -ForegroundColor White

Write-Host "`n8. Find specific document:" -ForegroundColor Yellow
Write-Host "   db.surveyResults.findOne({ email: 'user@example.com' })" -ForegroundColor White

Write-Host "`n9. Delete all documents (BE CAREFUL!):" -ForegroundColor Red
Write-Host "   db.surveyResults.deleteMany({})" -ForegroundColor White

Write-Host "`n10. Exit mongosh:" -ForegroundColor Yellow
Write-Host "    exit" -ForegroundColor White

Write-Host "`n💡 Tip: Run 'mongosh mongodb://localhost:27017' to start!" -ForegroundColor Green

