/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare module NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
  }
}
