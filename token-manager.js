// Token Manager for KETI Meeting Room System
// This file handles secure token management with localStorage

const TokenManager = {
    STORAGE_KEY: 'dooray_api_token',
    
    // Get token from localStorage or prompt user
    getToken() {
        let token = localStorage.getItem(this.STORAGE_KEY);
        
        if (!token) {
            token = this.promptForToken();
        }
        
        return token;
    },
    
    // Prompt user for token
    promptForToken() {
        const token = prompt(
            '🔐 Dooray API 토큰을 입력하세요:\n\n' +
            '토큰 발급 방법:\n' +
            '1. Dooray 로그인\n' +
            '2. 설정 → API 토큰 관리\n' +
            '3. 새 토큰 생성\n\n' +
            '토큰 형식: tenantId:token'
        );
        
        if (token && token.includes(':')) {
            this.saveToken(token);
            return token;
        } else if (token) {
            alert('❌ 올바른 토큰 형식이 아닙니다. (예: s701wolho5si:your-token)');
            return this.promptForToken();
        }
        
        return null;
    },
    
    // Save token to localStorage
    saveToken(token) {
        localStorage.setItem(this.STORAGE_KEY, token);
    },
    
    // Clear stored token
    clearToken() {
        localStorage.removeItem(this.STORAGE_KEY);
    },
    
    // Add token management UI
    createTokenUI() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 10000;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 12px;
        `;
        
        const status = document.createElement('span');
        status.textContent = this.getToken() ? '🟢 토큰 저장됨' : '🔴 토큰 없음';
        
        const changeBtn = document.createElement('button');
        changeBtn.textContent = '토큰 변경';
        changeBtn.style.cssText = `
            padding: 5px 10px;
            background: #007AFF;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        `;
        changeBtn.onclick = () => {
            this.clearToken();
            location.reload();
        };
        
        container.appendChild(status);
        container.appendChild(changeBtn);
        document.body.appendChild(container);
    }
};

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', () => {
    TokenManager.createTokenUI();
});