# KETI 회의실 예약 현황 조회

GitHub Pages를 통해 호스팅되는 Dooray 회의실 예약 현황 조회 도구입니다.

## 🎨 버전별 사용 방법

### 📱 기본 버전 (index.html)
**https://hwkim3330.github.io/dooray/**
- 기본 밝은 테마
- 중앙 실시간 시계
- 반응형 디자인
- 기본 토큰 내장

### 🌙 다크 모드 (dark.html)
**https://hwkim3330.github.io/dooray/dark.html**
- 다크 테마 (네온 블루 + 그라디언트)
- 대형 화면 최적화
- 눈이 편한 야간 모드
- 향상된 CORS 처리

### ⚡ 안정화 버전 (stable.html)
**https://hwkim3330.github.io/dooray/stable.html**
- 안정성 중심 설계
- 연결 상태 실시간 표시
- 자동 새로고침 (1분 간격)
- 수동 새로고침 버튼
- 마지막 업데이트 시간 표시

### 🔄 자동 새로고침 버전 (auto.html)
**https://hwkim3330.github.io/dooray/auto.html**
- 프리미엄 디자인
- 자동 새로고침 간격 설정 가능 (30초/1분/2분/5분)
- 실시간 통계 (전체/사용중/예약/가능)
- 진행 상태바
- 그라디언트 배경

### 📊 대시보드 버전 (dashboard.html)
**https://hwkim3330.github.io/dooray/dashboard.html**
- 전문가용 대시보드 UI
- 사이드바 네비게이션
- 실시간 통계 카드
- 위치별 필터링
- 다크 테마 전용
- 자동 새로고침 (1분)

## API 토큰 발급 방법

1. [Dooray](https://dooray.com)에 로그인
2. 설정 → 개인설정 → API 토큰 메뉴 이동
3. 새 토큰 생성 버튼 클릭
4. 생성된 토큰을 복사하여 사용
5. Ctrl+T 키로 토큰 변경 가능

자세한 API 문서: [Dooray API 가이드](https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419)

## CORS 자동 우회

확장 프로그램 설치 불필요! 안정적인 프록시를 자동으로 시도합니다.
속도 제한 문제를 해결하여 안정성을 크게 향상시켰습니다.

## 보안 안내

- API 토큰은 브라우저 로컬 스토리지에만 저장됩니다
- 서버로 토큰이 전송되지 않으며, 완전히 클라이언트 사이드에서 동작합니다
- GitHub Pages는 정적 호스팅이므로 서버 사이드 로깅이 없습니다

## 주요 기능

- 날짜별 회의실 예약 현황 조회
- 장소별 회의실 그룹핑  
- **실시간 디지털 시계** (헤더 중앙)
- 반응형 디자인 (모바일 지원)
- 실시간 예약 정보 표시
- 본인 예약 하이라이트
- **다크/라이트 모드** 선택 가능

## 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API**: Dooray REST API
- **Hosting**: GitHub Pages
- **Icons**: SVG Favicon

## 라이선스

MIT License