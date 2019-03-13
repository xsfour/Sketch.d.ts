/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarPressAndHoldTransposer<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    touchCancelled_withEvent<R = void, P0 = unknown, P1 = unknown>(_touchCancelled: P0, _withEvent: P1): R;
    touchEnded_withEvent<R = boolean, P0 = unknown, P1 = unknown>(_touchEnded: P0, _withEvent: P1): R;
    transposeTouch<R = void, P0 = unknown>(_transposeTouch: P0): R;
    transposeEvent<R = boolean, P0 = unknown>(_transposeEvent: P0): R;
    beginTransposingWithTouch<R = void, P0 = unknown>(_beginTransposingWithTouch: P0): R;
    dealloc<R = void>(): R;
    initWithSourceFrame_destinationContentView_frame<R = unknown, P0 = CGRect, P1 = unknown, P2 = CGRect>(_initWithSourceFrame: P0, _destinationContentView: P1, _frame: P2): R;
    initialXLocation<R = number>(): R;
    delegate<R = NSTouchBarPressAndHoldTransposerDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarPressAndHoldTransposerDelegate>(_v: P0): R;
    minimumRequiredDistance<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarPressAndHoldTransposer<T = any> extends NSObject {
      alloc<R = NSTouchBarPressAndHoldTransposer>(): R;
      new: <R = NSTouchBarPressAndHoldTransposer>() => R;
    }
  }
}

declare const NSTouchBarPressAndHoldTransposer: cocoa.classes.NSTouchBarPressAndHoldTransposer;
