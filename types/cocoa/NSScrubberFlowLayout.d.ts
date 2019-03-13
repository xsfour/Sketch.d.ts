/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayout<T = any> extends NSScrubberLayout {
    invalidateLayoutForItemsAtIndexes<R = void, P0 = unknown>(_invalidateLayoutForItemsAtIndexes: P0): R;
    scrubberContentSize<R = CGSize>(): R;
    itemSize<R = CGSize>(): R;
    setItemSize<R = void, P0 = CGSize>(_v: P0): R;
    itemSpacing<R = number>(): R;
    setItemSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberFlowLayout<T = any> extends NSScrubberLayout {
      alloc<R = NSScrubberFlowLayout>(): R;
      new: <R = NSScrubberFlowLayout>() => R;
    }
  }
}

declare const NSScrubberFlowLayout: cocoa.classes.NSScrubberFlowLayout;
