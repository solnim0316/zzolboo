@echo off
chcp 65001 > nul

:: 현재 날짜 가져오기 (형식: YYYY-MM-DD)
for /f %%i in ('powershell -Command "Get-Date -Format yyyy-MM-dd"') do set DATE=%%i

:: 현재 브랜치 이름 가져오기
for /f %%b in ('git branch --show-current') do set BRANCH=%%b

:: 커밋 메시지 입력
set /p MSG=커밋 메시지를 입력하세요: 

:: 전체 메시지 = 날짜 + 입력 메시지
set COMMIT_MSG=%DATE% [%BRANCH%] %MSG%

echo -----------------------------
echo 커밋 메시지: %COMMIT_MSG%
echo 현재 브랜치: %BRANCH%
echo -----------------------------

:: Git 명령 실행
git add .
git commit -m "%COMMIT_MSG%"

:: 에러 핸들링
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 커밋 중 오류가 발생했습니다. 작업 내용을 확인해주세요.
    pause
    exit /b
)

git push origin %BRANCH%

:: 완료 후 일시정지
echo -----------------------------
echo ✅ Push 완료!
pause
