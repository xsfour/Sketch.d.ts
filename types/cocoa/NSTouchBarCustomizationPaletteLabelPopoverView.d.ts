/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLabelPopoverView<T = any> extends NSView {
    edgeInset<R = number>(): R;
    setEdgeInset<R = void, P0 = number>(_v: P0): R;
    minHeight<R = number>(): R;
    setMinHeight<R = void, P0 = number>(_v: P0): R;
    center<R = number>(): R;
    setCenter<R = void, P0 = number>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLabelPopoverView<T = any> extends NSView {
      alloc<R = NSTouchBarCustomizationPaletteLabelPopoverView>(): R;
      new: <R = NSTouchBarCustomizationPaletteLabelPopoverView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLabelPopoverView: cocoa.classes.NSTouchBarCustomizationPaletteLabelPopoverView;
