/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleButton<T = any> extends cocoa.NSButton {
    cxx_destruct<R = void>(): R;
    sharedStyle<R = cocoa.MSSharedStyle>(): R;
    setSharedStyle<R = void, P0 = cocoa.MSSharedStyle>(_v: P0): R;
  }
  namespace classes {
    export interface MSSharedStyleButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSSharedStyleButton>(): R;
      new: <R = MSSharedStyleButton>() => R;
    }
  }
}

declare const MSSharedStyleButton: cocoa.classes.MSSharedStyleButton;
