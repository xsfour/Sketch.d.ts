/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerScrubberLayout<T = any> extends cocoa.NSScrubberLayout {
    shouldInvalidateLayoutForHighlightChange<R = boolean>(): R;
    shouldInvalidateLayoutForSelectionChange<R = boolean>(): R;
    scrubberContentSize<R = cocoa.CGSize>(): R;
    highlightedItemHeight<R = number>(): R;
    setHighlightedItemHeight<R = void, P0 = number>(_v: P0): R;
    selectedItemHeight<R = number>(): R;
    setSelectedItemHeight<R = void, P0 = number>(_v: P0): R;
    itemHeight<R = number>(): R;
    setItemHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerScrubberLayout<T = any> extends cocoa.classes.NSScrubberLayout {
      alloc<R = NSTouchBarColorListPickerScrubberLayout>(): R;
      new: <R = NSTouchBarColorListPickerScrubberLayout>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerScrubberLayout: cocoa.classes.NSTouchBarColorListPickerScrubberLayout;
