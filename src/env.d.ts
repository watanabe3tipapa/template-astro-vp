/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const c: DefineComponent;
  export default c;
}
