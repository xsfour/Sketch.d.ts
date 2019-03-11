/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarSliderPopoverTransposer<T = any> extends cocoa.NSTouchBarPressAndHoldTransposer {
    _continuationTimeoutFired<R = void, P0 = unknown>(__continuationTimeoutFired: P0): R;
    minimumRequiredDistance<R = number>(): R;
    initWithDestinationSlider<R = unknown, P0 = unknown>(_initWithDestinationSlider: P0): R;
    continuationTimeout<R = number>(): R;
    setContinuationTimeout<R = void, P0 = number>(_v: P0): R;
    continuationBehavior<R = number>(): R;
    setContinuationBehavior<R = void, P0 = number>(_v: P0): R;
    slider<R = cocoa.NSSlider>(): R;
    setSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarSliderPopoverTransposer<T = any> extends cocoa.classes.NSTouchBarPressAndHoldTransposer {
      alloc<R = NSTouchBarSliderPopoverTransposer>(): R;
      new: <R = NSTouchBarSliderPopoverTransposer>() => R;
    }
  }
}

declare const NSTouchBarSliderPopoverTransposer: cocoa.classes.NSTouchBarSliderPopoverTransposer;
