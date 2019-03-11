/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarStandardPopoverTransposer<T = any> extends cocoa.NSTouchBarPressAndHoldTransposer {
    tranposePoint<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_tranposePoint: P0): R;
    transposedTouchFromTouch_toLocation_prevLocation_phase_view<R = unknown, P0 = unknown, P1 = cocoa.CGPoint, P2 = cocoa.CGPoint, P3 = number, P4 = unknown>(_transposedTouchFromTouch: P0, _toLocation: P1, _prevLocation: P2, _phase: P3, _view: P4): R;
  }
  namespace classes {
    export interface NSTouchBarStandardPopoverTransposer<T = any> extends cocoa.classes.NSTouchBarPressAndHoldTransposer {
      alloc<R = NSTouchBarStandardPopoverTransposer>(): R;
      new: <R = NSTouchBarStandardPopoverTransposer>() => R;
    }
  }
}

declare const NSTouchBarStandardPopoverTransposer: cocoa.classes.NSTouchBarStandardPopoverTransposer;
