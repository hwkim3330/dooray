// Script to update all HTML files to use TokenManager
const fs = require('fs');
const path = require('path');

// Get all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if file contains the hardcoded token
    if (content.includes("TOKEN: 's701wolho5si:QQ5-gGPzTymiCSytV3vSRA'")) {
        console.log(`Updating ${file}...`);
        
        // Add token-manager.js script tag before closing body if not exists
        if (!content.includes('token-manager.js')) {
            content = content.replace('</body>', '<script src="token-manager.js"></script>\n</body>');
        }
        
        // Replace hardcoded token with TokenManager.getToken()
        content = content.replace(
            "TOKEN: 's701wolho5si:QQ5-gGPzTymiCSytV3vSRA'",
            "TOKEN: TokenManager.getToken() || 's701wolho5si:QQ5-gGPzTymiCSytV3vSRA' // Fallback for demo"
        );
        
        // Add token check at the beginning of main app initialization
        content = content.replace(
            'document.addEventListener(\'DOMContentLoaded\'',
            `document.addEventListener('DOMContentLoaded', () => {
    // Check for token first
    if (!TokenManager.getToken()) {
        document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;"><div style="text-align:center;"><h1>🔐 토큰이 필요합니다</h1><p>새로고침하여 토큰을 입력해주세요.</p><button onclick="location.reload()" style="padding:10px 20px;background:#007AFF;color:white;border:none;border-radius:5px;cursor:pointer;margin-top:20px;">새로고침</button></div></div>';
        return;
    }
});

document.addEventListener('DOMContentLoaded'`
        );
        
        fs.writeFileSync(file, content);
        console.log(`✅ ${file} updated`);
    }
});

console.log('Done!');