# Quick MongoDB Check Script
# This script checks if MongoDB is running and shows connection info

Write-Host "Checking MongoDB Status..." -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB service is running
$mongoService = Get-Service -Name MongoDB* -ErrorAction SilentlyContinue

if ($mongoService) {
    Write-Host "MongoDB Service Status: $($mongoService.Status)" -ForegroundColor Green
    Write-Host "Service Name: $($mongoService.Name)" -ForegroundColor Gray
} else {
    Write-Host "MongoDB service not found!" -ForegroundColor Red
    Write-Host "Make sure MongoDB is installed." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Connection Information:" -ForegroundColor Cyan
Write-Host "Connection String: mongodb://localhost:27017" -ForegroundColor White
Write-Host "Database Name: brandlift" -ForegroundColor White
Write-Host "Collections: feedback, surveyResults, users" -ForegroundColor White

Write-Host ""
Write-Host "To connect, run:" -ForegroundColor Yellow
Write-Host "mongosh mongodb://localhost:27017" -ForegroundColor White

Write-Host ""
Write-Host "Quick Commands:" -ForegroundColor Cyan
Write-Host "use brandlift" -ForegroundColor Gray
Write-Host "show collections" -ForegroundColor Gray
Write-Host "db.surveyResults.find().pretty()" -ForegroundColor Gray
