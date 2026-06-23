@echo off
chcp 65001 >nul
title Upload to GitHub - Affiliate Shopee

echo ========================================
echo   UPLOAD CODE LEN GITHUB
echo ========================================
echo.

set "GIT_PATH=C:\Program Files\Git\bin\git.exe"
set "REPO_DIR=C:\affiliate-shopee-master"
set "REPO_URL=https://github.com/trantrung23032001-art/affiliate-shopee.git"

echo [1/5] Dang khoi dong Git...
cd /d "%REPO_DIR%"

echo [2/5] Dang config thong tin Git...
"%GIT_PATH%" config user.email "trantrung23032001@gmail.com"
"%GIT_PATH%" config user.name "trantrung23032001-art"

echo [3/5] Dang them remote repository...
"%GIT_PATH%" remote set-url origin %REPO_URL% 2>nul || "%GIT_PATH%" remote add origin %REPO_URL%

echo [4/5] Dang add va commit files...
"%GIT_PATH%" add -A
"%GIT_PATH%" commit -m "Initial commit - SEO optimized affiliate Shopee converter"

echo [5/5] Dang push len GitHub...
echo.
echo ========================================
echo   BANG LUONG NGUYEN TRINH
echo ========================================
echo.
echo Nhan Y roi Enter de tiep tuc...
pause >nul

"%GIT_PATH%" push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   UPLOAD THANH CONG!
    echo ========================================
    echo.
    echo Repo: %REPO_URL%
    echo.
) else (
    echo.
    echo ========================================
    echo   LOI!
    echo ========================================
    echo.
    echo Nguyen nhan co the:
    echo 1. Khong ket noi duoc internet (DNS)
    echo 2. Can dang nhap GitHub (mo trinh duyet)
    echo 3. Chua tao repo tren GitHub
    echo.
)

pause