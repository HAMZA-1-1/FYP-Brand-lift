# MongoDB Connection Test Script
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "MongoDB Connection Test" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check MongoDB Service
Write-Host "1. Checking MongoDB Service..." -ForegroundColor Yellow
$mongoService = Get-Service -Name MongoDB* -ErrorAction SilentlyContinue
if ($mongoService -and $mongoService.Status -eq 'Running') {
    Write-Host "   Status: RUNNING" -ForegroundColor Green
} else {
    Write-Host "   Status: NOT RUNNING" -ForegroundColor Red
    Write-Host "   Please start MongoDB service" -ForegroundColor Yellow
    exit
}

Write-Host ""

# Check Backend Server
Write-Host "2. Checking Backend Server..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3001/health" -Method Get -TimeoutSec 2
    Write-Host "   Status: RUNNING" -ForegroundColor Green
    Write-Host "   Response: $($response.message)" -ForegroundColor Gray
} catch {
    Write-Host "   Status: NOT RUNNING" -ForegroundColor Red
    Write-Host "   Please start backend server: cd server; npm start" -ForegroundColor Yellow
}

Write-Host ""

# Test MongoDB Connection via mongosh
Write-Host "3. Testing MongoDB Connection..." -ForegroundColor Yellow
try {
    $result = mongosh mongodb://localhost:27017 --eval "db.adminCommand('ping')" --quiet 2>&1
    if ($result -match "ok.*1" -or $result -match "connectionId") {
        Write-Host "   Connection: SUCCESS" -ForegroundColor Green
    } else {
        Write-Host "   Connection: Testing..." -ForegroundColor Yellow
    }
} catch {
    Write-Host "   Connection: Could not test (mongosh may not be in PATH)" -ForegroundColor Yellow
}

Write-Host ""

# Connection Information
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Connection Information" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Connection String: mongodb://localhost:27017" -ForegroundColor White
Write-Host "Database Name: brandlift" -ForegroundColor White
Write-Host "Collections: feedback, surveyResults, users" -ForegroundColor White
Write-Host ""

Write-Host "To connect with MongoDB Compass:" -ForegroundColor Yellow
Write-Host "1. Open MongoDB Compass" -ForegroundColor White
Write-Host "2. Paste: mongodb://localhost:27017" -ForegroundColor White
Write-Host "3. Click Connect" -ForegroundColor White
Write-Host ""

Write-Host "To connect with PowerShell:" -ForegroundColor Yellow
Write-Host "mongosh mongodb://localhost:27017" -ForegroundColor White
Write-Host ""

