/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarFinder<T = any> extends NSObject {
    _userDefinedTouchBarDidReset<R = void, P0 = unknown>(__userDefinedTouchBarDidReset: P0): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRootProviderContainer_observer<R = unknown, P0 = unknown, P1 = unknown>(_initWithRootProviderContainer: P0, _observer: P1): R;
  }
  namespace classes {
    export interface NSTouchBarFinder<T = any> extends NSObject {
      alloc<R = NSTouchBarFinder>(): R;
      new: <R = NSTouchBarFinder>() => R;
    }
  }
}

declare const NSTouchBarFinder: cocoa.classes.NSTouchBarFinder;
