# 🚀 Netlify Deployment Guide

This guide provides step-by-step instructions for deploying the Sentinel.sol project to Netlify without leaking API keys.

## 📋 Prerequisites

- [Netlify account](https://netlify.com) (free)
- GitHub/GitLab repository
- Etherscan V2 API key
- Google Gemini AI API key

## 🔐 Secure Deployment Steps

### 1. Repository Preparation

```bash
# Commit all changes
git add .
git commit -m "Add Netlify deployment configuration"
git push origin main
```

**IMPORTANT**: The `.env` file won't be uploaded to Git because it's in `.gitignore`!

### 2. Creating Site on Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click **"Add new site"** > **"Import an existing project"**
3. Select GitHub/GitLab and connect your repository
4. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### 3. Adding Environment Variables

**IMPORTANT**: Add API keys from the Netlify dashboard, never write them in code!

1. Go to **Site settings** > **Environment variables** in the site dashboard
2. Add the following environment variables:

```
VITE_ETHERSCAN_API_KEY = your_etherscan_api_key_here
VITE_GEMINI_API_KEY = your_gemini_api_key_here  
VITE_ETHERSCAN_V2_API_URL = https://api.etherscan.io/v2/api
VITE_SUPPORTED_CHAINS = 1,56,137,42161,8453,10,534352,81457
```

### 4. Triggering Deployment

1. Click the **Deploy site** button
2. Monitor build logs
3. Get the site URL once deployment is complete

## 🔍 Post-Deployment Checks

### Security Checks:
- ✅ `.env` file not in repository
- ✅ API keys only in Netlify environment variables
- ✅ API keys not visible in build logs
- ✅ No security warnings in browser console

### Functionality Tests:
- ✅ Site loads
- ✅ Chain dropdown works
- ✅ Contract analysis works
- ✅ AI reports are displayed

## 📝 Netlify Domain Settings

### Custom Domain (Optional):
1. **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Configure DNS settings

### Deploy Hooks:
You can get webhook URLs for automatic deployment.

## ⚡ Automatic Deployment

For automatic deployment on every Git push:
1. **Site settings** > **Build & deploy**
2. **Continuous deployment** should be active
3. Branch: `main` should be selected

## 🛠️ Troubleshooting

### Build Errors:
```bash
# Test locally
npm run build
npm run preview
```

### Environment Variables Issues:
- Check variable names in Netlify dashboard
- Won't work without VITE_ prefix
- Redeploy required if environment variables change after deployment

### API Errors:
- Check browser console
- Examine API calls in Network tab
- Check rate limiting

## 📞 Support

For deployment issues:
- [Netlify Support](https://support.netlify.com/)
- [Netlify Community](https://community.netlify.com/)

---

**🔒 Security Note**: With this method, your API keys remain completely secure and are only used in the Netlify build process.
