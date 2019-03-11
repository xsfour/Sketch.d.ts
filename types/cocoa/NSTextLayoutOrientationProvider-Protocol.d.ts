/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextLayoutOrientationProviderProtocol<T = any> {
    layoutOrientation<R = number>(): R;
  }
  namespace classes {
    export interface NSTextLayoutOrientationProviderProtocol<T = any> {  }
  }
}

declare const NSTextLayoutOrientationProviderProtocol: cocoa.classes.NSTextLayoutOrientationProviderProtocol;
