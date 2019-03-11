/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStringProxyForContext<T = any> extends cocoa.NSString {
    _dynamicContextEvaluation_patternString<R = unknown, P0 = unknown, P1 = unknown>(__dynamicContextEvaluation: P0, _patternString: P1): R;
    _retainFormatter<R = void, P0 = unknown>(__retainFormatter: P0): R;
    length<R = number>(): R;
    dealloc<R = void>(): R;
    item<R = unknown>(): R;
    setItem<R = void, P0 = unknown>(_v: P0): R;
    formatter<R = cocoa.NSFormatter>(): R;
    setFormatter<R = void, P0 = cocoa.NSFormatter>(_v: P0): R;
    string<R = cocoa.NSString>(): R;
    setString<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSStringProxyForContext<T = any> extends cocoa.classes.NSString {
      alloc<R = _NSStringProxyForContext>(): R;
      new: <R = _NSStringProxyForContext>() => R;
    }
  }
}
