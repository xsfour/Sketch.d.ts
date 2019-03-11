/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMissingFontItem<T = any> extends cocoa.MSInspectorItem {
    missingFontTitle<R = unknown>(): R;
    hasMoreThanOneMissingFont<R = boolean>(): R;
    missingFontFamilyButton<R = cocoa.NSButton>(): R;
    setMissingFontFamilyButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    missingFontsLabel<R = cocoa.NSTextField>(): R;
    setMissingFontsLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSMissingFontItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSMissingFontItem>(): R;
      new: <R = MSMissingFontItem>() => R;
    }
  }
}

declare const MSMissingFontItem: cocoa.classes.MSMissingFontItem;
