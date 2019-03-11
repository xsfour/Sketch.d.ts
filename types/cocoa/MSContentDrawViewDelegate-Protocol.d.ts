/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = cocoa.CGPoint>(): R;
    setScrollOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSContentDrawViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSContentDrawViewDelegateProtocol: cocoa.classes.MSContentDrawViewDelegateProtocol;
