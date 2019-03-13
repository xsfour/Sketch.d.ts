/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetTableCellView<T = any> extends NSTableCellView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    sizeLabel<R = NSTextField>(): R;
    setSizeLabel<R = void, P0 = NSTextField>(_v: P0): R;
    checkmark<R = NSImageView>(): R;
    setCheckmark<R = void, P0 = NSImageView>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardPresetTableCellView<T = any> extends NSTableCellView {
      alloc<R = MSArtboardPresetTableCellView>(): R;
      new: <R = MSArtboardPresetTableCellView>() => R;
    }
  }
}

declare const MSArtboardPresetTableCellView: cocoa.classes.MSArtboardPresetTableCellView;
