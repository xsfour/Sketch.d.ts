/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectProtocol<T = any> {
    origin<R = cocoa.CGPoint>(): R;
    size<R = cocoa.CGSize>(): R;
    rect<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSRectProtocol<T = any> {  }
  }
}

declare const MSRectProtocol: cocoa.classes.MSRectProtocol;
