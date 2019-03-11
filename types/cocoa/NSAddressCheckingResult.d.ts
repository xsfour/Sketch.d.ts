/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAddressCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_components<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_initWithRange: P0, _components: P1): R;
    initWithRange_components_underlyingResult<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = void>(_initWithRange: P0, _components: P1, _underlyingResult: P2): R;
    underlyingResult<R = void>(): R;
  }
  namespace classes {
    export interface NSAddressCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSAddressCheckingResult>(): R;
      new: <R = NSAddressCheckingResult>() => R;
    }
  }
}

declare const NSAddressCheckingResult: cocoa.classes.NSAddressCheckingResult;
