#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Checking for updates...${NC}"

# Store current commit hash
BEFORE=$(git rev-parse HEAD)

# Perform git pull
git pull

# Get new commit hash
AFTER=$(git rev-parse HEAD)

# Check if there were any changes
if [ "$BEFORE" != "$AFTER" ]; then
    echo -e "${GREEN}Changes detected! Restarting AstroJS server...${NC}"
    
    # Kill any existing npm processes (preview server)
    echo -e "${YELLOW}Stopping existing server...${NC}"
    kill $(lsof -t -i:4321) 2>/dev/null || true
    
    # Wait a moment for processes to clean up
    sleep 2
    
    # Build the project
    echo -e "${YELLOW}Building project...${NC}"
    npm install
    npm run build
    
    # Check if build was successful
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Build successful! Starting preview server...${NC}"
        # Start preview server in background
        nohup npm run preview -- -host --config ./vite.config.js > server.log 2>&1 &
        echo -e "${GREEN}Server started! Check server.log for output.${NC}"
    else
        echo -e "${RED}Build failed! Check the output above for errors.${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}No changes detected. Server continues running.${NC}"
fi
