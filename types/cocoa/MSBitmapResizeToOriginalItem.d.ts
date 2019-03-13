/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapResizeToOriginalItem<T = any> extends MSInspectorItem {
    setToOriginalSizeButton<R = NSButton>(): R;
    setSetToOriginalSizeButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSBitmapResizeToOriginalItem<T = any> extends MSInspectorItem {
      alloc<R = MSBitmapResizeToOriginalItem>(): R;
      new: <R = MSBitmapResizeToOriginalItem>() => R;
    }
  }
}

declare const MSBitmapResizeToOriginalItem: cocoa.classes.MSBitmapResizeToOriginalItem;
