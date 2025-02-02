/// <reference types="vite/client" />

// Rozszerzenie obiektu import.meta.env przez nową zmienną środowiskową
interface ImportMetaEnv {
  readonly APP_VERSION: string;
  readonly VITE_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Zmienna globalna wystawiona przez konfigurację "define"
declare const __APP_VERSION__: string;
declare const __VITE_ENVIRONMENT__: string;
