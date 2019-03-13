/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectProtocol<T = any> {
    origin<R = CGPoint>(): R;
    size<R = CGSize>(): R;
    rect<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSRectProtocol<T = any> {  }
  }
}
