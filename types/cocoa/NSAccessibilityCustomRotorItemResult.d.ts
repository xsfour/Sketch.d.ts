/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotorItemResult<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithItemLoadingToken_customLabel<R = unknown, P0 = unknown, P1 = unknown>(_initWithItemLoadingToken: P0, _customLabel: P1): R;
    initWithTargetElement<R = unknown, P0 = unknown>(_initWithTargetElement: P0): R;
    NSObject<R = NSSecureCoding>(): R;
    customLabel<R = NSString>(): R;
    setCustomLabel<R = void, P0 = NSString>(_v: P0): R;
    targetRange<R = _NSRange>(): R;
    setTargetRange<R = void, P0 = _NSRange>(_v: P0): R;
    targetElement<R = NSAccessibilityElement>(): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomRotorItemResult<T = any> extends NSObject {
      alloc<R = NSAccessibilityCustomRotorItemResult>(): R;
      new: <R = NSAccessibilityCustomRotorItemResult>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotorItemResult: cocoa.classes.NSAccessibilityCustomRotorItemResult;
