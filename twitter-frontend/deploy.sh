#\!/bin/bash
# Run this script after logging in with firebase-tools locally
# and having FIREBASE_TOKEN set in your environment

npm run build
npx firebase-tools deploy --only hosting --token "$FIREBASE_TOKEN"
