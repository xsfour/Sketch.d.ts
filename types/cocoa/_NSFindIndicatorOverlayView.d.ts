/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFindIndicatorOverlayView<T = any> extends cocoa.NSView {
    _holes<R = unknown>(): R;
    _updateHoles<R = void>(): R;
    isFlipped<R = boolean>(): R;
    initWithTextFinderImpl_flipped<R = unknown, P0 = unknown, P1 = boolean>(_initWithTextFinderImpl: P0, _flipped: P1): R;
  }
  namespace classes {
    export interface _NSFindIndicatorOverlayView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSFindIndicatorOverlayView>(): R;
      new: <R = _NSFindIndicatorOverlayView>() => R;
    }
  }
}
