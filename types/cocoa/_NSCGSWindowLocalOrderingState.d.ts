/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowLocalOrderingState<T = any> extends cocoa.NSObject, cocoa._NSCGSWindowOrderingStateProtocol {
    dealloc<R = void>(): R;
    initWithWindows<R = unknown, P0 = unknown>(_initWithWindows: P0): R;
    orderedWindows<R = cocoa.NSOrderedSet>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowLocalOrderingState<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowLocalOrderingState>(): R;
      new: <R = _NSCGSWindowLocalOrderingState>() => R;
    }
  }
}
