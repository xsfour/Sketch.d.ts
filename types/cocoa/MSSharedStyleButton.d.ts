/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleButton<T = any> extends NSButton {
    cxx_destruct<R = void>(): R;
    sharedStyle<R = MSSharedStyle>(): R;
    setSharedStyle<R = void, P0 = MSSharedStyle>(_v: P0): R;
  }
  namespace classes {
    export interface MSSharedStyleButton<T = any> extends NSButton {
      alloc<R = MSSharedStyleButton>(): R;
      new: <R = MSSharedStyleButton>() => R;
    }
  }
}

declare const MSSharedStyleButton: cocoa.classes.MSSharedStyleButton;
