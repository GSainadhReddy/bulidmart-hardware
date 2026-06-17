$env:PATH = "c:\Users\G_SainadhReddy\sri sai hardware(2)\node_portable;" + $env:PATH
Write-Host "=================================================" -ForegroundColor Green
Write-Host "   Starting BuildMart E-commerce Platform...     " -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

# 1. Start Backend Server in a new PowerShell window
Write-Host "Launching Node.js Backend Server on Port 5000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList '-NoExit', '-Command', '$Host.UI.RawUI.WindowTitle = "BuildMart Backend API"; $env:PATH = "c:\Users\G_SainadhReddy\sri sai hardware(2)\node_portable;" + $env:PATH; cd backend; npm start'

# 2. Start Frontend Dev Server in a new PowerShell window
Write-Host "Launching Vite React Frontend Server on Port 3000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList '-NoExit', '-Command', '$Host.UI.RawUI.WindowTitle = "BuildMart Frontend React"; $env:PATH = "c:\Users\G_SainadhReddy\sri sai hardware(2)\node_portable;" + $env:PATH; cd frontend; npm run dev'

Write-Host "-------------------------------------------------" -ForegroundColor Green
Write-Host "Servers launched successfully in separate windows!" -ForegroundColor Green
Write-Host "  - Frontend App: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  - Backend API:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "-------------------------------------------------" -ForegroundColor Green
Write-Host "Close the opened windows to stop the servers." -ForegroundColor Gray
