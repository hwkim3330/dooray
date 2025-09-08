// Dooray API 공통 모듈
// 모든 HTML 파일에서 사용할 수 있는 통합 API 처리 모듈

const DoorayAPI = {
    // 기본 설정
    config: {
        API_TOKEN: 's701wolho5si:QQ5-gGPzTymiCSytV3vSRA',
        CACHE_DURATION: 5 * 60 * 1000, // 5분
        START_HOUR: 9,
        END_HOUR: 19
    },

    // 캐시 관리
    cache: new Map(),
    cacheTimestamps: new Map(),

    // 작동하는 프록시 메서드 저장
    workingMethod: null,

    // 캐시 체크
    getFromCache(key) {
        const cached = this.cache.get(key);
        const timestamp = this.cacheTimestamps.get(key);
        
        if (cached && timestamp && (Date.now() - timestamp < this.config.CACHE_DURATION)) {
            return cached;
        }
        
        return null;
    },

    // 캐시 저장
    setCache(key, data) {
        this.cache.set(key, data);
        this.cacheTimestamps.set(key, Date.now());
    },

    // 캐시 클리어
    clearCache() {
        this.cache.clear();
        this.cacheTimestamps.clear();
    },

    // API 호출 메서드들
    async directCall(url) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `dooray-api ${this.config.API_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (e) {
            // 실패 시 null 반환
        }
        return null;
    },

    async allOriginsProxy(url) {
        try {
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.status && data.status.http_code === 200) {
                    return JSON.parse(data.contents);
                }
            }
        } catch (e) {
            // 실패 시 null 반환
        }
        return null;
    },

    async corsProxy(url) {
        try {
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl, {
                headers: {
                    'Authorization': `dooray-api ${this.config.API_TOKEN}`
                }
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (e) {
            // 실패 시 null 반환
        }
        return null;
    },

    async thingProxy(url) {
        try {
            const proxyUrl = `https://thingproxy.freeboard.io/fetch/${url}`;
            const response = await fetch(proxyUrl, {
                headers: {
                    'Authorization': `dooray-api ${this.config.API_TOKEN}`
                }
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (e) {
            // 실패 시 null 반환
        }
        return null;
    },

    async hoppscotchProxy(url) {
        try {
            const proxyUrl = `https://proxy.hoppscotch.io/${url}`;
            const response = await fetch(proxyUrl, {
                headers: {
                    'Authorization': `dooray-api ${this.config.API_TOKEN}`,
                    'x-proxy-key': 'hoppscotch'
                }
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (e) {
            // 실패 시 null 반환
        }
        return null;
    },

    // 메인 API 호출 함수
    async call(endpoint, params = {}) {
        const baseUrl = `https://api.dooray.com${endpoint}`;
        const queryString = new URLSearchParams(params).toString();
        const url = `${baseUrl}${queryString ? '?' + queryString : ''}`;
        
        // 캐시 확인
        const cacheKey = `${endpoint}_${queryString}`;
        const cached = this.getFromCache(cacheKey);
        if (cached) {
            return cached;
        }
        
        // 작동하는 메서드가 있으면 먼저 시도
        if (this.workingMethod) {
            try {
                const result = await this[this.workingMethod](url);
                if (result) {
                    this.setCache(cacheKey, result);
                    return result;
                }
            } catch (e) {
                console.log('Cached method failed, trying others...');
                this.workingMethod = null;
            }
        }
        
        // 모든 메서드 순차 시도
        const methods = [
            'directCall',
            'allOriginsProxy',
            'corsProxy',
            'thingProxy',
            'hoppscotchProxy'
        ];
        
        for (const method of methods) {
            try {
                const result = await this[method](url);
                if (result) {
                    this.workingMethod = method;
                    this.setCache(cacheKey, result);
                    this.showStatus(`✓ ${method} 연결 성공`, 'success');
                    return result;
                }
            } catch (e) {
                console.log(`Method ${method} failed:`, e);
            }
            // Rate limiting 방지
            await new Promise(r => setTimeout(r, 100));
        }
        
        this.showStatus('✗ API 연결 실패', 'error');
        throw new Error('모든 API 호출 방법이 실패했습니다');
    },

    // 상태 표시 (선택적)
    showStatus(message, type) {
        // 기존 상태 요소가 있으면 업데이트
        let statusEl = document.getElementById('api-status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.id = 'api-status';
            statusEl.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 10px 15px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                font-size: 12px;
                z-index: 1000;
                transition: opacity 0.3s;
            `;
            document.body.appendChild(statusEl);
        }
        
        statusEl.textContent = message;
        statusEl.style.borderLeft = `4px solid ${type === 'success' ? '#34c759' : '#ff3b30'}`;
        statusEl.style.color = type === 'success' ? '#34c759' : '#ff3b30';
        statusEl.style.opacity = '1';
        
        setTimeout(() => {
            statusEl.style.opacity = '0';
        }, 3000);
    },

    // 사용자 정보 가져오기
    async getMyInfo() {
        try {
            const response = await this.call('/common/v1/members/me');
            return response.result || {};
        } catch (error) {
            console.log('Failed to load user info:', error);
            return {};
        }
    },

    // 위치 목록 가져오기
    async getLocations() {
        try {
            const response = await this.call('/reservation/v1/resource-categories', { size: 20 });
            return (response.result || []).sort((a, b) => {
                const nameA = a.name || '';
                const nameB = b.name || '';
                if (nameA.includes("판교")) return -1;
                if (nameB.includes("판교")) return 1;
                return nameA.localeCompare(nameB);
            });
        } catch (error) {
            console.error('Failed to load locations:', error);
            return [];
        }
    },

    // 회의실 목록 가져오기
    async getRooms(locationId) {
        try {
            const response = await this.call('/reservation/v1/reservable-resources', {
                resourceCategoryId: locationId,
                size: 200
            });
            return response.result || [];
        } catch (error) {
            console.error('Failed to load rooms:', error);
            return [];
        }
    },

    // 예약 정보 가져오기
    async getReservations(roomIds, date) {
        try {
            const timeMin = `${date}T00:00:00+09:00`;
            const nextDate = new Date(date);
            nextDate.setDate(nextDate.getDate() + 1);
            const timeMax = `${nextDate.toISOString().split('T')[0]}T00:00:00+09:00`;
            
            const response = await this.call('/reservation/v1/resource-reservations', {
                resourceIds: roomIds,
                timeMin: timeMin,
                timeMax: timeMax,
                size: 500
            });
            return response.result || [];
        } catch (error) {
            console.log('Failed to load reservations:', error);
            return [];
        }
    },

    // 색상 생성 헬퍼
    getLocationColor(locationName) {
        const colors = ['#007aff', '#34c759', '#ff9500', '#ff3b30', '#af52de', '#5856d6', '#ff2d55', '#5ac8fa', '#ffcc00', '#4cd964'];
        let hash = 0;
        for (let i = 0; i < locationName.length; i++) {
            hash = locationName.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash % colors.length)];
    }
};

// 전역으로 사용 가능하도록 설정
window.DoorayAPI = DoorayAPI;