/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontCellView<T = any> extends NSTableCellView {
    fontWeightPopUpButton<R = NSPopUpButton>(): R;
    setFontWeightPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    fontFamilyButton<R = NSButton>(): R;
    setFontFamilyButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSReplaceFontCellView<T = any> extends NSTableCellView {
      alloc<R = MSReplaceFontCellView>(): R;
      new: <R = MSReplaceFontCellView>() => R;
    }
  }
}

declare const MSReplaceFontCellView: cocoa.classes.MSReplaceFontCellView;
