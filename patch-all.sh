#!/bin/bash

# List of files to update
files=(
    "keti.html"
    "keti-clean.html"
    "keti-display.html"
    "keti-final.html"
    "keti-horizontal.html"
    "keti-ipad.html"
    "keti-ipad-pro.html"
    "keti-landscape.html"
    "keti-minimal.html"
    "keti-pro.html"
    "keti-simple.html"
    "keti-today.html"
    "improved.html"
    "index.html"
    "dashboard.html"
    "dark.html"
    "auto.html"
    "simple.html"
    "stable.html"
    "working.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Updating $file..."
        
        # Add token-manager.js before </body> if not present
        if ! grep -q "token-manager.js" "$file"; then
            sed -i 's|</body>|<script src="token-manager.js"></script>\n</body>|' "$file"
        fi
        
        # Replace hardcoded token
        sed -i "s|TOKEN: 's701wolho5si:QQ5-gGPzTymiCSytV3vSRA'|TOKEN: TokenManager.getToken() || 'DEMO_MODE'|g" "$file"
        
        echo "✅ $file updated"
    fi
done

echo "All files updated!"