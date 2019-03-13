/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeDocumentButtonPopUpMenuProxy<T = any> extends NSProxy {
    createRealObjectIfNeeded<R = void>(): R;
    initWithDocumentButton<R = unknown, P0 = unknown>(_initWithDocumentButton: P0): R;
  }
  namespace classes {
    export interface NSThemeDocumentButtonPopUpMenuProxy<T = any> extends NSProxy {  }
  }
}

declare const NSThemeDocumentButtonPopUpMenuProxy: cocoa.classes.NSThemeDocumentButtonPopUpMenuProxy;
