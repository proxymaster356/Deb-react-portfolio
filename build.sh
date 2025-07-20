#!/bin/bash

# Ensure node_modules/.bin/vite has execute permissions
chmod +x node_modules/.bin/vite 2>/dev/null || true
chmod +x node_modules/.bin/* 2>/dev/null || true

# Run the build
npx vite build
