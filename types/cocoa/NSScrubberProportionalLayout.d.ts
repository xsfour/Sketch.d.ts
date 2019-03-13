/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberProportionalLayout<T = any> extends NSScrubberLayout {
    scrubberContentSize<R = CGSize>(): R;
    itemWidth<R = number>(): R;
    initWithNumberOfVisibleItems<R = unknown, P0 = number>(_initWithNumberOfVisibleItems: P0): R;
    numberOfVisibleItems<R = number>(): R;
    setNumberOfVisibleItems<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberProportionalLayout<T = any> extends NSScrubberLayout {
      alloc<R = NSScrubberProportionalLayout>(): R;
      new: <R = NSScrubberProportionalLayout>() => R;
    }
  }
}

declare const NSScrubberProportionalLayout: cocoa.classes.NSScrubberProportionalLayout;
