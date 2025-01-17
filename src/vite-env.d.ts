/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LICHESS_ACCESS_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
