/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderBackgroundView<T = any> extends NSView {
    _cui_optionsForCurrentState<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSliderBackgroundView<T = any> extends NSView {
      alloc<R = _NSSliderBackgroundView>(): R;
      new: <R = _NSSliderBackgroundView>() => R;
    }
  }
}
