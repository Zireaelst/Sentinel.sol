# 🚨 SECURITY WARNING

After cloning this project, you must follow these steps:

## 1. API Keys

### Etherscan V2 API
- Go to https://docs.etherscan.io/v/etherscan-v2
- Create a free account
- Get your API key

### Google Gemini AI API  
- Go to https://aistudio.google.com/
- Click "Get API key" button
- Create a new API key

## 2. Environment Variables Setup

```bash
# Copy the .env.example file
cp .env.example .env

# Open the .env file with your editor and add your own API keys
nano .env
```

## 3. Security Checks

- ✅ `.env` file is defined in `.gitignore`
- ✅ Real API keys are not committed to Git
- ✅ `.env.example` contains only placeholder values

## 4. Demo API Keys

This project may contain demo API keys. For production use:

- ⚠️ Always use your own API keys
- ⚠️ Don't forget rate limiting and quota controls
- ⚠️ Never share API keys in public repositories

## 5. Deployment

When deploying to platforms like Vercel, Netlify:

- Add environment variables from the platform dashboard
- Do not deploy the `.env` file
- Use separate API keys for production
