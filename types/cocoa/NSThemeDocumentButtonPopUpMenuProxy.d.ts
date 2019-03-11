/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeDocumentButtonPopUpMenuProxy<T = any> extends cocoa.NSProxy {
    createRealObjectIfNeeded<R = void>(): R;
    initWithDocumentButton<R = unknown, P0 = unknown>(_initWithDocumentButton: P0): R;
  }
  namespace classes {
    export interface NSThemeDocumentButtonPopUpMenuProxy<T = any> extends cocoa.classes.NSProxy {  }
  }
}

declare const NSThemeDocumentButtonPopUpMenuProxy: cocoa.classes.NSThemeDocumentButtonPopUpMenuProxy;
