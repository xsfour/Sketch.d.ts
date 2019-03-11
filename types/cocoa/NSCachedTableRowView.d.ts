/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedTableRowView<T = any> extends cocoa.NSTableRowView {
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    setEmphasized<R = void, P0 = boolean>(_setEmphasized: P0): R;
    _cacheRowImageFromTableView<R = void>(): R;
    cachedImage<R = cocoa.NSImage>(): R;
    setCachedImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSCachedTableRowView<T = any> extends cocoa.classes.NSTableRowView {
      alloc<R = NSCachedTableRowView>(): R;
      new: <R = NSCachedTableRowView>() => R;
    }
  }
}

declare const NSCachedTableRowView: cocoa.classes.NSCachedTableRowView;
