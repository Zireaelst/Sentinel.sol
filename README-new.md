# Sentinel.sol - AI-Powered Smart Contract Security Analyzer

![Sentinel.sol Banner](https://via.placeholder.com/800x200/0A0A0A/FFFFFF?text=Sentinel.sol+-+AI+Security+Analyzer)

## 🛡️ What is Sentinel.sol?

Sentinel.sol is an AI-powered security analyzer that helps Web3 users interact safely with smart contracts. Using the power of Google Gemini AI, it analyzes any smart contract in seconds and reports potential security risks in language everyone can understand.

## ✨ Features

- 🤖 **AI-Powered Analysis**: Deep security analysis with Google Gemini AI
- 🔗 **Multi-Chain Support**: Ethereum, BNB Chain, and Polygon
- ⚡ **Fast Results**: Comprehensive analysis report in 10-20 seconds
- 📊 **Visual Risk Levels**: Low, Medium, High risk categories
- 🌐 **Multi-Language Support**: Clean and intuitive interface
- 📱 **Responsive Design**: Perfect display on all devices

## 🚀 How It Works

1. **Enter Contract Address**: Paste the smart contract address starting with 0x
2. **Select Blockchain**: Choose from Ethereum, BNB Chain, or Polygon
3. **Start Analysis**: AI analysis begins automatically
4. **Review Report**: Get detailed security report and recommendations

## 🔧 Installation

### Requirements

- Node.js 16+ 
- NPM or Yarn
- API Keys (free):
  - [Etherscan API](https://etherscan.io/apis)
  - [BSCScan API](https://bscscan.com/apis)
  - [PolygonScan API](https://polygonscan.com/apis)
  - [Google AI Studio API](https://aistudio.google.com/)

### Step-by-Step Installation

1. **Clone the Project**
   ```bash
   git clone https://github.com/your-username/sentinel-sol.git
   cd sentinel-sol
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Add API Keys**
   
   ⚠️ **Security Warning**: Never commit your real API keys to Git!
   
   ```bash
   # Copy the .env.example file
   cp .env.example .env
   ```
   
   Open the `.env` file with your editor and replace the placeholder values:
   
   ```bash
   VITE_ETHERSCAN_API_KEY=your_etherscan_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Start the Application**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   
   Go to http://localhost:5173

## 🎯 Contract Examples for Demo

### Safe Contract (Low Risk)
- **Uniswap V2 Router**: `0x7a250d5630b4cf539739df2c5dacb4c659f2488d`
- **USDC Token**: `0xa0b86a33e6e6d9c08c7c4e26c2d1d3e8eed9a7b6`

### Test Contracts
You can also analyze your own test contracts!

## 🏗️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini 1.5 Flash
- **Blockchain APIs**: Etherscan, BSCScan, PolygonScan
- **Build Tool**: Vite
- **Package Manager**: NPM

## 🔍 AI Analysis Criteria

Sentinel.sol checks for the following security vulnerabilities:

- ✅ Re-entrancy attacks
- ✅ Integer overflow/underflow
- ✅ Uncontrolled external calls
- ✅ Gas limit issues
- ✅ Access control problems
- ✅ Centralization risks
- ✅ Deprecated Solidity features
- ✅ Potential "rug pull" functions

## 🎨 Screenshots

![Home Page](https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Home+Page)

![Analysis Report](https://via.placeholder.com/600x400/0A0A0A/FFFFFF?text=Analysis+Report)

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🏆 Hackathon

This project was developed for the **ZetaChain & Google Cloud Buildathon**.

**Judging Criteria:**
- ✅ **Technical Innovation**: AI + Blockchain integration
- ✅ **Practical Application**: Real-world problem solution
- ✅ **AI Usage**: Google Gemini AI integration
- ✅ **User Experience**: Modern and user-friendly interface

## 📞 Contact

- **Project**: Sentinel.sol
- **Email**: your-email@example.com
- **Demo Video**: [YouTube Link]
- **Live Demo**: [Vercel/Netlify Link]

---

**⚠️ Important Note**: This tool is for guidance purposes only. Always conduct professional audits before making large transactions.
