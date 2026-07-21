@echo off
setlocal
cd /d "%~dp0"

if not exist .env.local (
  copy .env.example .env.local >nul
  echo.
  echo Created .env.local from .env.example.
  echo IMPORTANT: Open .env.local and add MongoDB, Better Auth, and Google OAuth values.
  echo.
)

call npm install
if errorlevel 1 (
  echo npm install failed.
  pause
  exit /b 1
)

call npm run dev
pause
