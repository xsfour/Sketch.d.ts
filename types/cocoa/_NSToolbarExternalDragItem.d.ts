/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarExternalDragItem<T = any> extends cocoa.NSToolbarItem {
    externalItems<R = cocoa.NSArray>(): R;
    setExternalItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSToolbarExternalDragItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = _NSToolbarExternalDragItem>(): R;
      new: <R = _NSToolbarExternalDragItem>() => R;
    }
  }
}
