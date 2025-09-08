# 🏢 KETI 회의실 예약 시스템

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/hwkim3330/dooray.svg)](https://github.com/hwkim3330/dooray/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/hwkim3330/dooray.svg)](https://github.com/hwkim3330/dooray/issues)

KETI(한국전자기술연구원) 회의실 예약 현황을 실시간으로 확인할 수 있는 웹 대시보드 시스템입니다.

## ✨ 주요 기능

### 📊 실시간 회의실 현황
- 모든 지점의 회의실 예약 현황을 한눈에 확인
- 시간대별 예약 상태를 타임라인으로 표시
- 현재 시간 인디케이터로 진행 중인 회의 확인

### 🔍 검색 및 필터링
- 회의실 이름 또는 예약자로 빠른 검색
- 예약 가능한 회의실만 필터링
- 내 예약 현황 빠른 확인

### 🎨 모던한 UI/UX
- 그라디언트 배경의 세련된 디자인
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 다크모드 자동 지원
- 부드러운 애니메이션 효과

### ⚡ 성능 최적화
- 5분 캐싱 시스템으로 빠른 로딩
- 자동 프록시 선택으로 안정적인 연결
- 1분마다 자동 새로고침

## 🚀 빠른 시작

### 온라인 사용
[https://hwkim3330.github.io/dooray/improved.html](https://hwkim3330.github.io/dooray/improved.html) ⭐ **추천**

## 🎨 버전별 사용 방법

### 🌟 최신 개선 버전 (improved.html) - **추천**
**https://hwkim3330.github.io/dooray/improved.html**
- 모든 기능이 통합된 최신 버전
- 모듈화된 코드 구조
- 향상된 성능과 UI/UX
- 실시간 검색 및 필터링
- 탭 방식 위치 선택

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

## 📁 파일 구조

```
dooray/
├── improved.html       # 🌟 최신 개선 버전 (권장)
├── working.html        # 작동 확인된 안정 버전
├── stable.html         # 기본 안정 버전
├── index.html          # 원본 버전
├── simple.html         # 간단한 버전
├── dashboard.html      # 대시보드 버전
├── dark.html           # 다크모드 버전
├── auto.html           # 자동 새로고침 버전
├── favicon.svg         # 파비콘
├── cloudflare-worker.js # Cloudflare Worker 프록시
├── CORS_SOLUTION.md    # CORS 해결 방법
├── SETUP_GUIDE.md      # 설정 가이드
└── README.md           # 이 문서
```

## 🛠 기술 스택

- **Frontend**: 순수 HTML5, CSS3, JavaScript (ES6+)
- **API**: Dooray API
- **프록시**: 다중 CORS 프록시 지원
  - AllOrigins
  - CorsProxy
  - ThingProxy
  - Hoppscotch
- **디자인**: 반응형 디자인, CSS Grid, Flexbox
- **호스팅**: GitHub Pages

## 🎯 주요 개선사항 (improved.html)

### 📦 모듈화된 구조
- `CacheManager`: 효율적인 캐시 관리
- `NotificationManager`: 사용자 알림 시스템
- `APIManager`: 다중 프록시 자동 선택
- `UIRenderer`: UI 렌더링 최적화
- `MeetingRoomApp`: 메인 애플리케이션 컨트롤러

### 🎨 UI/UX 개선
- 탭 방식의 위치 선택
- 실시간 통계 표시
- 툴팁으로 상세 정보 표시
- 부드러운 애니메이션
- 범례 추가

### ⚡ 성능 최적화
- 5분 캐싱 시스템
- 병렬 API 호출
- 작동하는 프록시 메서드 자동 저장

## 🔧 CORS 문제 해결

Dooray API는 CORS 정책으로 인해 직접 호출이 제한될 수 있습니다.

### 해결 방법
1. **프록시 서버 사용** (자동)
   - 애플리케이션이 자동으로 여러 프록시를 시도합니다

2. **브라우저 확장 프로그램**
   - [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) 설치

3. **Cloudflare Worker** (고급)
   - `cloudflare-worker.js` 파일 참조
   - 자세한 내용은 `CORS_SOLUTION.md` 참고

## 📝 API 토큰 설정

현재 기본 토큰이 설정되어 있습니다. 필요시 HTML 파일의 `API_TOKEN` 값을 수정하세요:

```javascript
const CONFIG = {
    API_TOKEN: 'your-api-token-here',
    // ...
};
```

### 토큰 발급 방법
1. [Dooray](https://dooray.com)에 로그인
2. 설정 → 개인설정 → API 토큰 메뉴 이동
3. 새 토큰 생성 버튼 클릭
4. 생성된 토큰을 복사하여 사용

자세한 API 문서: [Dooray API 가이드](https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419)

## 🔒 보안 안내

- API 토큰은 브라우저 로컬 스토리지에만 저장됩니다
- 서버로 토큰이 전송되지 않으며, 완전히 클라이언트 사이드에서 동작합니다
- GitHub Pages는 정적 호스팅이므로 서버 사이드 로깅이 없습니다

## 🤝 기여하기

기여를 환영합니다! 다음 방법으로 기여할 수 있습니다:

1. 이슈 등록
2. Pull Request 제출
3. 기능 제안
4. 버그 리포트

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👥 개발자

- **메인 개발**: [@hwkim3330](https://github.com/hwkim3330)
- **기여자**: 환영합니다!

## 📞 문의

- **Issues**: [GitHub Issues](https://github.com/hwkim3330/dooray/issues)
- **Email**: hwkim3330@github.com

## 🚀 향후 계획

- [ ] 회의실 예약 기능 추가
- [ ] 모바일 앱 개발
- [ ] 알림 기능 강화
- [ ] 통계 대시보드 추가
- [ ] 다국어 지원
- [ ] PWA 지원

---

⭐ 이 프로젝트가 유용하다면 Star를 눌러주세요!