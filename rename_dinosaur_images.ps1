# 🦕 공룡 이미지 파일명을 MBTI 타입으로 변경하는 스크립트

# 원본 이미지 폴더 경로 (사용자가 수정 필요)
$sourceFolder = "C:\Users\User\Desktop\tests\dino_test\images"

# 대상 폴더 경로
$targetFolder = "C:\Users\User\Desktop\my-tailwind-app\my-tailwind-app\public\images\tests\dinosaur"

# 공룡 이름 → MBTI 매핑
$dinosaurMapping = @{
    "spinosaurus" = "INTJ"
    "deinonychus" = "INTP"
    "tyrannosaurus" = "ENTJ"
    "allosaurus" = "ENTP"
    "maiasaura" = "INFJ"
    "brachiosaurus" = "INFP"
    "iguanodon" = "ENFJ"
    "velociraptor" = "ENFP"
    "ankylosaurus" = "ISTJ"
    "triceratops" = "ISFJ"
    "carnotaurus" = "ESTJ"
    "stegosaurus" = "ESFJ"
    "pachyrhinosaurus" = "ISTP"
    "pachycephalosaurus" = "ISFP"
    "giganotosaurus" = "ESTP"
    "parasaurolophus" = "ESFP"
    "busaurus" = "UNKNOWN"
}

# 대상 폴더가 없으면 생성
if (!(Test-Path $targetFolder)) {
    New-Item -ItemType Directory -Path $targetFolder -Force
}

Write-Host "🦕 공룡 이미지 파일명 변경 시작..." -ForegroundColor Green

# 각 매핑에 대해 파일 복사 및 이름 변경
foreach ($dinosaur in $dinosaurMapping.Keys) {
    $mbtiType = $dinosaurMapping[$dinosaur]
    
    # 가능한 파일 확장자들
    $extensions = @(".png", ".jpg", ".jpeg", ".gif", ".webp")
    
    foreach ($ext in $extensions) {
        $sourceFile = Join-Path $sourceFolder "$dinosaur$ext"
        $targetFile = Join-Path $targetFolder "$mbtiType$ext"
        
        if (Test-Path $sourceFile) {
            Copy-Item $sourceFile $targetFile -Force
            Write-Host "✅ $dinosaur$ext → $mbtiType$ext" -ForegroundColor Cyan
            break
        }
    }
}

Write-Host "🎉 파일명 변경 완료!" -ForegroundColor Green
Write-Host "📁 변경된 이미지 위치: $targetFolder" -ForegroundColor Yellow
