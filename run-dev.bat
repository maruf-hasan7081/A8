@echo off
setlocal
cd /d "%~dp0"

echo ==========================================
echo Leaf and Lore - Install and Run
echo ==========================================

if not exist .env.local (
  copy .env.example .env.local >nul
  echo Created .env.local from .env.example.
  echo Please edit .env.local with your MongoDB and Google OAuth values.
  echo.
)

echo Installing dependencies with npm install...
call npm install

if errorlevel 1 (
  echo.
  echo Dependency installation failed.
  echo Run: npm install --verbose
  pause
  exit /b 1
)

echo.
echo Starting development server...
call npm run dev
pause
