/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetTableCellView<T = any> extends cocoa.NSTableCellView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    sizeLabel<R = cocoa.NSTextField>(): R;
    setSizeLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    checkmark<R = cocoa.NSImageView>(): R;
    setCheckmark<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardPresetTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSArtboardPresetTableCellView>(): R;
      new: <R = MSArtboardPresetTableCellView>() => R;
    }
  }
}

declare const MSArtboardPresetTableCellView: cocoa.classes.MSArtboardPresetTableCellView;
