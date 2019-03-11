/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLabelPopoverView<T = any> extends cocoa.NSView {
    edgeInset<R = number>(): R;
    setEdgeInset<R = void, P0 = number>(_v: P0): R;
    minHeight<R = number>(): R;
    setMinHeight<R = void, P0 = number>(_v: P0): R;
    center<R = number>(): R;
    setCenter<R = void, P0 = number>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLabelPopoverView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTouchBarCustomizationPaletteLabelPopoverView>(): R;
      new: <R = NSTouchBarCustomizationPaletteLabelPopoverView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLabelPopoverView: cocoa.classes.NSTouchBarCustomizationPaletteLabelPopoverView;
