# KETI 회의실 예약 현황 조회

GitHub Pages를 통해 호스팅되는 Dooray 회의실 예약 현황 조회 도구입니다.

## 🚀 사용 방법

1. [GitHub Pages 링크](https://hwkim3330.github.io/dooray/)에 접속
2. Dooray API 토큰 입력
3. 회의실 예약 현황 확인

## 🔑 API 토큰 발급 방법

1. [Dooray](https://dooray.com)에 로그인
2. **설정** → **개인설정** → **API 토큰** 메뉴 이동
3. **새 토큰 생성** 버튼 클릭
4. 생성된 토큰을 복사하여 사용

📖 자세한 API 문서: [Dooray API 가이드](https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419)

## ⚠️ CORS 문제 해결

브라우저의 CORS 정책으로 인해 직접 Dooray API 호출이 제한될 수 있습니다.

### 해결 방법

1. **Chrome 확장 프로그램 사용** (권장)
   - [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) 설치
   - 확장 프로그램 활성화 후 사이트 새로고침

2. **프록시 서버 사용**
   - 코드에서 `cors-anywhere` 주석 해제
   - 또는 개인 프록시 서버 구축

3. **로컬 서버 실행**
   ```bash
   # Python 간단 서버
   python -m http.server 8000
   
   # Node.js 서버 (http-server 설치 필요)
   npx http-server
   ```

## 🔒 보안 안내

- API 토큰은 브라우저 로컬 스토리지에만 저장됩니다
- 서버로 토큰이 전송되지 않으며, 완전히 클라이언트 사이드에서 동작합니다
- GitHub Pages는 정적 호스팅이므로 서버 사이드 로깅이 없습니다

## ✨ 주요 기능

- 📅 날짜별 회의실 예약 현황 조회
- 🏢 장소별 회의실 그룹핑
- 📱 반응형 디자인 (모바일 지원)
- 🔍 실시간 예약 정보 표시
- 👤 본인 예약 하이라이트

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API**: Dooray REST API
- **Hosting**: GitHub Pages

## 📝 라이선스

MIT License