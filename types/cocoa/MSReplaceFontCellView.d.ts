/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontCellView<T = any> extends cocoa.NSTableCellView {
    fontWeightPopUpButton<R = cocoa.NSPopUpButton>(): R;
    setFontWeightPopUpButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    fontFamilyButton<R = cocoa.NSButton>(): R;
    setFontFamilyButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSReplaceFontCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSReplaceFontCellView>(): R;
      new: <R = MSReplaceFontCellView>() => R;
    }
  }
}

declare const MSReplaceFontCellView: cocoa.classes.MSReplaceFontCellView;
