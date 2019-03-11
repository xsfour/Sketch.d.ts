/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapResizeToOriginalItem<T = any> extends cocoa.MSInspectorItem {
    setToOriginalSizeButton<R = cocoa.NSButton>(): R;
    setSetToOriginalSizeButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSBitmapResizeToOriginalItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSBitmapResizeToOriginalItem>(): R;
      new: <R = MSBitmapResizeToOriginalItem>() => R;
    }
  }
}

declare const MSBitmapResizeToOriginalItem: cocoa.classes.MSBitmapResizeToOriginalItem;
