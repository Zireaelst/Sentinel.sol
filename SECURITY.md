# 🚨 GÜVENLİK UYARISI

Bu projeyi klonladıktan sonra aşağıdaki adımları mutlaka uygulayın:

## 1. API Anahtarları

### Etherscan V2 API
- https://docs.etherscan.io/v/etherscan-v2 adresine gidin
- Ücretsiz hesap oluşturun
- API anahtarınızı alın

### Google Gemini AI API  
- https://aistudio.google.com/ adresine gidin
- "Get API key" butonuna tıklayın
- Yeni API anahtarı oluşturun

## 2. Environment Variables Kurulumu

```bash
# .env.example dosyasını kopyalayın
cp .env.example .env

# .env dosyasını editörünüzle açın ve kendi API anahtarlarınızı ekleyin
nano .env
```

## 3. Güvenlik Kontrolleri

- ✅ `.env` dosyası `.gitignore`'da tanımlı
- ✅ Gerçek API anahtarları Git'e commitlenmez
- ✅ `.env.example` sadece placeholder değerler içerir

## 4. Demo API Anahtarları

Bu projede demo amaçlı API anahtarları bulunabilir. Production kullanımında:

- ⚠️ Mutlaka kendi API anahtarlarınızı kullanın
- ⚠️ Rate limiting ve quota kontrollerini unutmayın
- ⚠️ API anahtarlarını asla public repository'lerde paylaşmayın

## 5. Deployment

Vercel, Netlify gibi platformlarda deploy ederken:

- Environment variables'ları platform dashboard'undan ekleyin
- `.env` dosyasını deploy etmeyin
- Production için ayrı API anahtarları kullanın
