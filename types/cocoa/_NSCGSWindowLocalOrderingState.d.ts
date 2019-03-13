/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowLocalOrderingState<T = any> extends NSObject, _NSCGSWindowOrderingStateProtocol {
    dealloc<R = void>(): R;
    initWithWindows<R = unknown, P0 = unknown>(_initWithWindows: P0): R;
    orderedWindows<R = NSOrderedSet>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowLocalOrderingState<T = any> extends NSObject, _NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowLocalOrderingState>(): R;
      new: <R = _NSCGSWindowLocalOrderingState>() => R;
    }
  }
}
