/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPositionInspectorItem<T = any> extends cocoa.MSPositionInspectorItem {
    sizeToFitButton<R = cocoa.NSButton>(): R;
    setSizeToFitButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSArtboardPositionInspectorItem<T = any> extends cocoa.classes.MSPositionInspectorItem {
      alloc<R = MSArtboardPositionInspectorItem>(): R;
      new: <R = MSArtboardPositionInspectorItem>() => R;
    }
  }
}

declare const MSArtboardPositionInspectorItem: cocoa.classes.MSArtboardPositionInspectorItem;
