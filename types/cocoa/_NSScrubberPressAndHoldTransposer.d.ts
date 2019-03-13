/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberPressAndHoldTransposer<T = any> extends NSTouchBarStandardPopoverTransposer {
    _sendTransposedEvent_toGestureRecognizers<R = void, P0 = unknown, P1 = unknown>(__sendTransposedEvent: P0, _toGestureRecognizers: P1): R;
  }
  namespace classes {
    export interface _NSScrubberPressAndHoldTransposer<T = any> extends NSTouchBarStandardPopoverTransposer {
      alloc<R = _NSScrubberPressAndHoldTransposer>(): R;
      new: <R = _NSScrubberPressAndHoldTransposer>() => R;
    }
  }
}
