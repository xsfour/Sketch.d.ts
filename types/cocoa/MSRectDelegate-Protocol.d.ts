/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectDelegateProtocol<T = any> extends NSObjectProtocol {
    rect_didChangeFromRect<R = void, P0 = MSRect, P1 = CGRect>(_rect: P0, _didChangeFromRect: P1): R;
  }
  namespace classes {
    export interface MSRectDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
