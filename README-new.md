# Sentinel.sol - AI Destekli Akıllı Kontrat Güvenlik Analizörü

![Sentinel.sol Banner](https://via.placeholder.com/800x200/0A0A0A/FFFFFF?text=Sentinel.sol+-+AI+G%C3%BCvenlik+Analiz%C3%B6r%C3%BC)

## 🛡️ Nedir?

Sentinel.sol, Web3 kullanıcılarının akıllı kontratlarla güvenli bir şekilde etkileşime girmelerine yardımcı olan AI destekli bir güvenlik analizörüdür. Google Gemini AI'ın gücünü kullanarak, herhangi bir akıllı kontratı saniyeler içinde analiz eder ve potansiyel güvenlik risklerini herkesin anlayabileceği bir dilde raporlar.

## ✨ Özellikler

- 🤖 **AI Destekli Analiz**: Google Gemini AI ile derinlemesine güvenlik analizi
- 🔗 **Çoklu Zincir Desteği**: Ethereum, BNB Chain ve Polygon
- ⚡ **Hızlı Sonuçlar**: 10-20 saniyede kapsamlı analiz raporu
- 📊 **Görsel Risk Seviyeleri**: Düşük, Orta, Yüksek risk kategorileri
- 🌐 **Türkçe Dil Desteği**: Tamamen Türkçe arayüz ve raporlar
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm

## 🚀 Nasıl Çalışır?

1. **Kontrat Adresi Girin**: 0x ile başlayan akıllı kontrat adresini yapıştırın
2. **Blockchain Seçin**: Ethereum, BNB Chain veya Polygon'dan birini seçin
3. **Analiz Başlatın**: AI analizi otomatik olarak başlar
4. **Raporu İnceleyin**: Detaylı güvenlik raporu ve önerileri alın

## 🔧 Kurulum

### Gereksinimler

- Node.js 16+ 
- NPM veya Yarn
- API Anahtarları (ücretsiz):
  - [Etherscan API](https://etherscan.io/apis)
  - [BSCScan API](https://bscscan.com/apis)
  - [PolygonScan API](https://polygonscan.com/apis)
  - [Google AI Studio API](https://aistudio.google.com/)

### Adım Adım Kurulum

1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/your-username/sentinel-sol.git
   cd sentinel-sol
   ```

2. **Bağımlılıkları Yükleyin**
   ```bash
   npm install
   ```

3. **API Anahtarlarını Ekleyin**
   
   `src/services/contractAnalysis.ts` dosyasını açın ve `API_KEYS` objesindeki anahtarları güncelleyin:
   
   ```typescript
   export const API_KEYS: ApiKeys = {
     ethereum: "YOUR_ETHERSCAN_API_KEY",
     bsc: "YOUR_BSCSCAN_API_KEY", 
     polygon: "YOUR_POLYGONSCAN_API_KEY",
     gemini: "YOUR_GEMINI_API_KEY"
   };
   ```

4. **Uygulamayı Başlatın**
   ```bash
   npm run dev
   ```

5. **Tarayıcıda Açın**
   
   http://localhost:5173 adresine gidin

## 🎯 Demo İçin Kontrat Örnekleri

### Güvenli Kontrat (Düşük Risk)
- **Uniswap V2 Router**: `0x7a250d5630b4cf539739df2c5dacb4c659f2488d`
- **USDC Token**: `0xa0b86a33e6e6d9c08c7c4e26c2d1d3e8eed9a7b6`

### Test Kontratları
Kendi test kontratlarınızı da analiz edebilirsiniz!

## 🏗️ Teknoloji Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini 1.5 Flash
- **Blockchain APIs**: Etherscan, BSCScan, PolygonScan
- **Build Tool**: Vite
- **Package Manager**: NPM

## 🔍 AI Analiz Kriterleri

Sentinel.sol aşağıdaki güvenlik açıklarını kontrol eder:

- ✅ Re-entrancy saldırıları
- ✅ Integer overflow/underflow
- ✅ Kontrolsüz external çağrılar
- ✅ Gas limit sorunları
- ✅ Erişim kontrolü problemleri
- ✅ Merkezileşme riskleri
- ✅ Deprecated Solidity özellikleri
- ✅ Potansiyel "rug pull" fonksiyonları

## 🎨 Ekran Görüntüleri

![Ana Sayfa](https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Ana+Sayfa)

![Analiz Raporu](https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Analiz+Raporu)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🏆 Hackathon

Bu proje **ZetaChain & Google Cloud Buildathon** için geliştirilmiştir.

**Jüri Kriterleri:**
- ✅ **Teknik Yenilik**: AI + Blockchain entegrasyonu
- ✅ **Pratik Uygulama**: Gerçek dünya sorunu çözümü
- ✅ **AI Kullanımı**: Google Gemini AI entegrasyonu
- ✅ **Kullanıcı Deneyimi**: Modern ve kullanıcı dostu arayüz

## 📞 İletişim

- **Proje**: Sentinel.sol
- **Email**: your-email@example.com
- **Demo Video**: [YouTube Link]
- **Canlı Demo**: [Vercel/Netlify Link]

---

**⚠️ Önemli Not**: Bu araç yalnızca rehberlik amaçlıdır. Büyük miktarlarda işlem yapmadan önce mutlaka profesyonel denetim yaptırın.
