# Dooray 회의실 예약 시스템 설정 가이드

## 🚨 CORS 문제 해결 방법

Dooray API는 Authorization 헤더를 필요로 하지만, 브라우저의 CORS 정책으로 인해 직접 호출이 불가능합니다.

## 해결 방법 1: Cloudflare Worker 사용 (추천)

### 1단계: Cloudflare 계정 생성
1. [Cloudflare Workers](https://workers.cloudflare.com/) 접속
2. 무료 계정 생성 (월 100,000 요청 무료)

### 2단계: Worker 생성
1. Dashboard에서 "Create a Service" 클릭
2. Service name: `dooray-proxy` 입력
3. "Create service" 클릭

### 3단계: Worker 코드 배포
1. "Quick edit" 클릭
2. `cloudflare-worker.js` 파일의 내용 전체 복사
3. 에디터에 붙여넣기
4. "Save and Deploy" 클릭

### 4단계: Worker URL 확인
- 생성된 URL 형태: `https://dooray-proxy.YOUR-SUBDOMAIN.workers.dev`

### 5단계: HTML 파일 수정
```javascript
// API_BASE_URL을 Worker URL로 변경
const API_BASE_URL = 'https://dooray-proxy.YOUR-SUBDOMAIN.workers.dev/api';
```

## 해결 방법 2: 브라우저 확장 프로그램

### Chrome
1. [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) 설치
2. 확장 프로그램 아이콘 클릭하여 활성화
3. GitHub Pages 사이트 새로고침

### Firefox  
1. [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) 설치
2. 확장 프로그램 활성화
3. 사이트 새로고침

## 해결 방법 3: 로컬 프록시 서버

### Node.js 프록시 서버
```bash
# 프록시 서버 설치
npm install -g local-cors-proxy

# 프록시 실행
lcp --proxyUrl https://api.dooray.com --port 8010

# HTML에서 API URL 변경
# https://api.dooray.com → http://localhost:8010
```

## 🔧 GitHub Pages 배포

### 1. 리포지토리 생성
1. GitHub에서 새 리포지토리 생성
2. 리포지토리 이름: `dooray` (또는 원하는 이름)

### 2. 파일 업로드
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dooray.git
git push -u origin main
```

### 3. GitHub Pages 활성화
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, /(root)
4. Save

### 4. 접속 URL
- `https://YOUR_USERNAME.github.io/dooray/`

## 📝 파일 설명

### 필수 파일
- `index.html` - 기본 라이트 모드
- `favicon.svg` - 파비콘

### 추가 버전들
- `dark.html` - 다크 모드
- `stable.html` - 안정화 버전 (자동 새로고침)
- `auto.html` - 자동 새로고침 (설정 가능)
- `dashboard.html` - 대시보드 UI
- `simple.html` - 심플 버전 (최소 기능)

### 프록시 설정
- `cloudflare-worker.js` - Cloudflare Worker 코드

## ⚠️ 주의사항

1. **API 토큰 보안**
   - 토큰은 클라이언트 코드에 노출됩니다
   - 중요한 권한이 있는 토큰은 사용하지 마세요
   - 읽기 전용 토큰 사용 권장

2. **Rate Limiting**
   - 무료 프록시 서비스는 요청 제한이 있습니다
   - 너무 자주 새로고침하지 마세요
   - Cloudflare Worker 사용 시 월 100,000 요청 제한

3. **CORS 프록시 안정성**
   - 공개 프록시는 불안정할 수 있습니다
   - 중요한 용도라면 자체 프록시 구축 권장

## 🆘 문제 해결

### "CORS policy" 에러
- Cloudflare Worker 설정 확인
- 브라우저 확장 프로그램 활성화 확인
- 프록시 URL이 올바른지 확인

### "429 Too Many Requests" 에러
- 잠시 기다린 후 재시도
- 다른 프록시 서비스로 전환
- 자동 새로고침 간격 늘리기

### "Authorization header" 에러
- AllOrigins는 헤더를 지원하지 않음
- Cloudflare Worker 또는 브라우저 확장 사용

## 📧 지원

문제가 지속되면 다음 방법을 시도하세요:
1. 브라우저 개발자 도구 콘솔 확인
2. 네트워크 탭에서 실패한 요청 확인
3. GitHub Issues에 문제 보고