@echo off
chcp 65001
title Git 자동화: Pull → Merge → Commit → Push

:: 현재 날짜 가져오기 (YYYY-MM-DD 형식)
for /f %%i in ('powershell -Command "Get-Date -Format yyyy-MM-dd"') do set DATE=%%i

:: 현재 브랜치명 가져오기
for /f %%b in ('git branch --show-current') do set BRANCH=%%b

:: 원격 변경사항 가져오기
echo 🔄 원격 저장소에서 변경사항을 가져오는 중...
git pull origin %BRANCH% --no-edit

:: 커밋 메시지 입력 받기
echo.
set /p MSG=커밋 메시지를 입력하세요: 
set COMMIT_MSG=%DATE% [%BRANCH%] %MSG%

:: 변경 사항 반영
echo ✅ 커밋 메시지: %COMMIT_MSG%
git add .
git commit -m "%COMMIT_MSG%"
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 커밋 실패! 변경된 내용이 없거나 에러가 발생했을 수 있습니다.
    pause
    exit /b
)

:: 변경사항 푸시
echo 🚀 변경사항을 원격 저장소에 푸시합니다...
git push origin %BRANCH%

echo.
echo ✅ 모든 작업 완료! 원격 저장소에 최신 상태가 반영되었습니다.
pause
