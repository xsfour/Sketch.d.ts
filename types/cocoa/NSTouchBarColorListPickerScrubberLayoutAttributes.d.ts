/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerScrubberLayoutAttributes<T = any> extends cocoa.NSScrubberLayoutAttributes {
    isRightmostItem<R = boolean>(): R;
    setIsRightmostItem<R = void, P0 = boolean>(_v: P0): R;
    isLeftmostItem<R = boolean>(): R;
    setIsLeftmostItem<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorListPickerScrubberLayoutAttributes<T = any> extends cocoa.classes.NSScrubberLayoutAttributes {
      alloc<R = NSTouchBarColorListPickerScrubberLayoutAttributes>(): R;
      new: <R = NSTouchBarColorListPickerScrubberLayoutAttributes>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerScrubberLayoutAttributes: cocoa.classes.NSTouchBarColorListPickerScrubberLayoutAttributes;
