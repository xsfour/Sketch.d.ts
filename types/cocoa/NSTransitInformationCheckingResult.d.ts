/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTransitInformationCheckingResult<T = any> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_components<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _components: P1): R;
    initWithRange_components_underlyingResult<R = unknown, P0 = _NSRange, P1 = unknown, P2 = void>(_initWithRange: P0, _components: P1, _underlyingResult: P2): R;
    underlyingResult<R = void>(): R;
  }
  namespace classes {
    export interface NSTransitInformationCheckingResult<T = any> extends NSTextCheckingResult {
      alloc<R = NSTransitInformationCheckingResult>(): R;
      new: <R = NSTransitInformationCheckingResult>() => R;
    }
  }
}

declare const NSTransitInformationCheckingResult: cocoa.classes.NSTransitInformationCheckingResult;
