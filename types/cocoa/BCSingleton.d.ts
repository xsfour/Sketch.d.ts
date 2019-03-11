/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSingleton<T = any> {}
  namespace classes {
    export interface BCSingleton<T = any> {  }
  }
}

declare const BCSingleton: cocoa.classes.BCSingleton;
