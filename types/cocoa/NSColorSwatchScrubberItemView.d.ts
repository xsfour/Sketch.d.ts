/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSwatchScrubberItemView<T = any> extends cocoa.NSScrubberItemView {
    forceOutline<R = boolean>(): R;
    setForceOutline<R = void, P0 = boolean>(_v: P0): R;
    isRightmostItem<R = boolean>(): R;
    setIsRightmostItem<R = void, P0 = boolean>(_v: P0): R;
    isLeftmostItem<R = boolean>(): R;
    setIsLeftmostItem<R = void, P0 = boolean>(_v: P0): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorSwatchScrubberItemView<T = any> extends cocoa.classes.NSScrubberItemView {
      alloc<R = NSColorSwatchScrubberItemView>(): R;
      new: <R = NSColorSwatchScrubberItemView>() => R;
    }
  }
}

declare const NSColorSwatchScrubberItemView: cocoa.classes.NSColorSwatchScrubberItemView;
