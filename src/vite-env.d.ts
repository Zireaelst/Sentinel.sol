/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ETHERSCAN_API_KEY: string
  readonly VITE_GEMINI_API_KEY: string
  readonly VITE_ETHERSCAN_V2_API_URL: string
  readonly VITE_SUPPORTED_CHAINS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
