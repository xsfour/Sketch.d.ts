/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedTableCellView<T = any> extends cocoa.NSControl {
    cachedImage<R = cocoa.NSImage>(): R;
    setCachedImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSCachedTableCellView<T = any> extends cocoa.classes.NSControl {
      alloc<R = NSCachedTableCellView>(): R;
      new: <R = NSCachedTableCellView>() => R;
    }
  }
}

declare const NSCachedTableCellView: cocoa.classes.NSCachedTableCellView;
