/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewStaticItemData<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    dealloc<R = void>(): R;
    loadedFromEncoder<R = boolean>(): R;
    setLoadedFromEncoder<R = void, P0 = boolean>(_v: P0): R;
    expanded<R = boolean>(): R;
    setExpanded<R = void, P0 = boolean>(_v: P0): R;
    expandable<R = boolean>(): R;
    setExpandable<R = void, P0 = boolean>(_v: P0): R;
    rowView<R = cocoa.NSTableRowView>(): R;
    setRowView<R = void, P0 = cocoa.NSTableRowView>(_v: P0): R;
    children<R = cocoa.NSMutableArray>(): R;
    setChildren<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSOutlineViewStaticItemData<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSOutlineViewStaticItemData>(): R;
      new: <R = NSOutlineViewStaticItemData>() => R;
    }
  }
}

declare const NSOutlineViewStaticItemData: cocoa.classes.NSOutlineViewStaticItemData;
