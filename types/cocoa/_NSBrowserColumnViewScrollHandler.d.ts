/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserColumnViewScrollHandler<T = any> extends cocoa.NSObject {
    shouldSendEvent_toSuperview_toSuperclass<R = void, P0 = unknown, P1 = string, P2 = string>(_shouldSendEvent: P0, _toSuperview: P1, _toSuperclass: P2): R;
  }
  namespace classes {
    export interface _NSBrowserColumnViewScrollHandler<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSBrowserColumnViewScrollHandler>(): R;
      new: <R = _NSBrowserColumnViewScrollHandler>() => R;
    }
  }
}
