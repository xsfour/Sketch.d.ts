/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    rect_didChangeFromRect<R = void, P0 = cocoa.MSRect, P1 = cocoa.CGRect>(_rect: P0, _didChangeFromRect: P1): R;
  }
  namespace classes {
    export interface MSRectDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSRectDelegateProtocol: cocoa.classes.MSRectDelegateProtocol;
