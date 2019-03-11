/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowServerOrderingState<T = any> extends cocoa.NSObject, cocoa._NSCGSWindowOrderingStateProtocol {
    commit<R = void>(): R;
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowServerOrderingState<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowServerOrderingState>(): R;
      new: <R = _NSCGSWindowServerOrderingState>() => R;
    }
  }
}
