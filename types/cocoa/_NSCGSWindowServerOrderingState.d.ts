/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowServerOrderingState<T = any> extends NSObject, _NSCGSWindowOrderingStateProtocol {
    commit<R = void>(): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowServerOrderingState<T = any> extends NSObject, _NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowServerOrderingState>(): R;
      new: <R = _NSCGSWindowServerOrderingState>() => R;
    }
  }
}
