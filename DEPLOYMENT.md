# 🚀 Netlify Deployment Rehberi

Bu rehber, Sentinel.sol projesini API anahtarlarını leak etmeden Netlify'e deploy etmek için adım adım talimatlar içerir.

## 📋 Ön Gereksinimler

- [Netlify hesabı](https://netlify.com) (ücretsiz)
- GitHub/GitLab repository
- Etherscan V2 API anahtarı
- Google Gemini AI API anahtarı

## 🔐 Güvenli Deployment Adımları

### 1. Repository Hazırlığı

```bash
# Tüm değişiklikleri commit edin
git add .
git commit -m "Add Netlify deployment configuration"
git push origin main
```

**ÖNEMLİ**: `.env` dosyası `.gitignore`'da olduğu için Git'e upload edilmeyecek!

### 2. Netlify'de Site Oluşturma

1. [Netlify Dashboard](https://app.netlify.com/)'a gidin
2. **"Add new site"** > **"Import an existing project"** tıklayın
3. GitHub/GitLab'ı seçin ve repository'nizi bağlayın
4. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### 3. Environment Variables Ekleme

**ÖNEMLİ**: API anahtarlarını Netlify dashboard'dan ekleyin, asla kodda yazmayın!

1. Site dashboard'unda **Site settings** > **Environment variables** gidin
2. Aşağıdaki environment variables'ları ekleyin:

```
VITE_ETHERSCAN_API_KEY = your_etherscan_api_key_here
VITE_GEMINI_API_KEY = your_gemini_api_key_here  
VITE_ETHERSCAN_V2_API_URL = https://api.etherscan.io/v2/api
VITE_SUPPORTED_CHAINS = 1,56,137,42161,8453,10,534352,81457
```

### 4. Deploy Tetikleme

1. **Deploy site** butonuna tıklayın
2. Build loglarını izleyin
3. Deploy tamamlandığında site URL'ini alın

## 🔍 Deployment Sonrası Kontroller

### Güvenlik Kontrolleri:
- ✅ `.env` dosyası repository'de yok
- ✅ API anahtarları sadece Netlify environment variables'ında
- ✅ Build loglarında API anahtarları görünmüyor
- ✅ Browser console'da güvenlik uyarısı yok

### Fonksiyonellik Testleri:
- ✅ Site açılıyor
- ✅ Chain dropdown'ı çalışıyor
- ✅ Kontrat analizi çalışıyor
- ✅ AI raporları gösteriliyor

## 📝 Netlify Domain Ayarları

### Custom Domain (Opsiyonel):
1. **Site settings** > **Domain management**
2. **Add custom domain** tıklayın
3. DNS ayarlarını yapın

### Deploy Hooks:
Otomatik deploy için webhook URL'si alabilirsiniz.

## ⚡ Otomatik Deployment

Her Git push'ta otomatik deploy için:
1. **Site settings** > **Build & deploy**
2. **Continuous deployment** aktif olmalı
3. Branch: `main` seçili olmalı

## 🛠️ Troubleshooting

### Build Hataları:
```bash
# Local'de test edin
npm run build
npm run preview
```

### Environment Variables Sorunları:
- Netlify dashboard'da değişken isimlerini kontrol edin
- VITE_ prefix'i olmadan çalışmaz
- Deploy sonrası environment variables değişirse redeploy gerekir

### API Hataları:
- Browser console'u kontrol edin
- Network tab'ında API çağrılarını inceleyin
- Rate limiting kontrolü yapın

## 📞 Destek

Deployment sorunları için:
- [Netlify Support](https://support.netlify.com/)
- [Netlify Community](https://community.netlify.com/)

---

**🔒 Güvenlik Notu**: Bu yöntemle API anahtarlarınız tamamen güvenli kalır ve sadece Netlify build process'inde kullanılır.
