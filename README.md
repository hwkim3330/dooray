# 🏢 KETI 회의실 예약 시스템

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/hwkim3330/dooray.svg)](https://github.com/hwkim3330/dooray/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/hwkim3330/dooray.svg)](https://github.com/hwkim3330/dooray/issues)

KETI(한국전자기술연구원) 회의실 예약 현황을 실시간으로 확인할 수 있는 웹 대시보드 시스템입니다.

## 🔐 보안 업데이트 (중요!)

**v2.0부터 API 토큰이 코드에서 제거되었습니다.**
- 첫 실행 시 Dooray API 토큰 입력 필요
- 토큰은 브라우저 localStorage에 안전하게 저장
- 토큰 변경은 우측 하단 버튼으로 가능

### 토큰 발급 방법
1. [Dooray](https://dooray.com) 로그인
2. 설정 → API 토큰 관리
3. 새 토큰 생성
4. 형식: `tenantId:token` (예: `s701wolho5si:your-token-here`)

## ✨ 주요 기능

### 📊 실시간 회의실 현황
- 모든 지점의 회의실 예약 현황을 한눈에 확인
- 시간대별 예약 상태를 타임라인으로 표시
- 현재 시간 인디케이터로 진행 중인 회의 확인

### 🔍 검색 및 필터링
- 회의실 이름 또는 예약자로 빠른 검색
- 예약 가능한 회의실만 필터링
- 내 예약 현황 빠른 확인

### 🎨 다양한 UI 테마 (7가지)
각 테마는 동일한 기능을 제공하며 디자인만 다릅니다.

#### 📚 **keti-eta.html** - 대학 시간표 스타일
- 에브리타임 같은 대학교 시간표 UI
- 세로축 시간, 가로축 회의실
- 알록달록한 그라데이션 색상

#### 🍎 **keti-apple.html** - Apple 스타일 (준비중)
- Apple 디자인 가이드라인 적용
- 깔끔하고 모던한 인터페이스

#### 🌃 **keti-neon.html** - 네온/사이버펑크 (준비중)
- 어두운 배경에 네온 효과
- 미래적인 사이버펑크 테마

#### 📰 **keti-newspaper.html** - 신문 스타일 (준비중)
- 클래식한 신문 레이아웃
- 세리프 폰트와 컬럼 구조

#### 📱 **keti-mobile.html** - 모바일 최적화 (준비중)
- 모바일 퍼스트 디자인
- 터치 최적화 인터페이스

#### 🕹️ **keti-retro.html** - 레트로 아케이드 (준비중)
- 8비트 픽셀 아트 스타일
- 복고풍 게임 UI

#### ⚪ **keti-white.html** - 화이트 테마 (준비중)
- 미니멀한 화이트 디자인
- 깔끔한 타이포그래피

### ⚡ 성능 최적화
- 5분 캐싱 시스템으로 빠른 로딩
- 자동 프록시 선택으로 안정적인 연결
- 1분마다 자동 새로고침

## 🚀 빠른 시작

### 온라인 사용
1. 원하는 테마 선택:
   - [대학 시간표 스타일](https://hwkim3330.github.io/dooray/keti-eta.html) ⭐ **추천**
   - [최신 개선 버전](https://hwkim3330.github.io/dooray/improved.html)
   - [기본 버전](https://hwkim3330.github.io/dooray/)

2. Dooray API 토큰 입력
3. 회의실 현황 확인!

## 🛠️ 로컬 설치

```bash
# 저장소 클론
git clone https://github.com/hwkim3330/dooray.git

# 폴더 이동
cd dooray

# 웹 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 열기
# http://localhost:8000/keti-eta.html
```

## 📁 파일 구조

```
dooray/
├── token-manager.js      # 토큰 관리 모듈
├── keti-eta.html        # 대학 시간표 스타일
├── keti-white.html      # 화이트 테마
├── improved.html        # 개선된 버전
├── index.html          # 기본 버전
└── README.md           # 이 파일
```

## 🔒 보안 고려사항

- API 토큰은 절대 공유하지 마세요
- 공용 컴퓨터 사용 후 토큰 삭제 권장
- 정기적으로 토큰 재발급 권장

## 📝 라이센스

MIT License - 자유롭게 사용 및 수정 가능합니다.

## 🤝 기여하기

Pull Request 환영합니다!
1. Fork
2. Feature branch 생성
3. Commit
4. Push
5. Pull Request 생성

## 📮 문의

Issues 탭에서 문의해주세요.

---
Made with ❤️ for KETI