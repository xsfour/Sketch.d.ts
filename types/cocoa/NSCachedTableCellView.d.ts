/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedTableCellView<T = any> extends NSControl {
    cachedImage<R = NSImage>(): R;
    setCachedImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSCachedTableCellView<T = any> extends NSControl {
      alloc<R = NSCachedTableCellView>(): R;
      new: <R = NSCachedTableCellView>() => R;
    }
  }
}

declare const NSCachedTableCellView: cocoa.classes.NSCachedTableCellView;
