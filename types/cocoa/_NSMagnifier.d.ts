/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMagnifier<T = any> extends cocoa.NSObject, cocoa.NSWindowDelegateProtocol {
    trackMagnifierWithDelegate<R = void, P0 = unknown>(_trackMagnifierWithDelegate: P0): R;
    _createMagnifyingGlassWindow<R = void>(): R;
    magnifyingGlassContentViewClass<R = unknown>(): R;
    dealloc<R = void>(): R;
    continuous<R = boolean>(): R;
    setContinuous<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMagnifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = _NSMagnifier>(): R;
      new: <R = _NSMagnifier>() => R;
      sharedMagnifier<R = unknown>(): R;
    }
  }
}
