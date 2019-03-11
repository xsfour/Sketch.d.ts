/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowLayout<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    adjustFrame_forWindow_onScreen<R = void, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown>(_adjustFrame: P0, _forWindow: P1, _onScreen: P2): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithWindowFrame_screenLayoutFrame<R = unknown, P0 = cocoa.CGRect, P1 = cocoa.CGRect>(_initWithWindowFrame: P0, _screenLayoutFrame: P1): R;
    initWithWindow_screen<R = unknown, P0 = unknown, P1 = unknown>(_initWithWindow: P0, _screen: P1): R;
  }
  namespace classes {
    export interface NSWindowLayout<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSWindowLayout>(): R;
      new: <R = NSWindowLayout>() => R;
    }
  }
}

declare const NSWindowLayout: cocoa.classes.NSWindowLayout;
