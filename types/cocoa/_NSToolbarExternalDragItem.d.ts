/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarExternalDragItem<T = any> extends NSToolbarItem {
    externalItems<R = NSArray>(): R;
    setExternalItems<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSToolbarExternalDragItem<T = any> extends NSToolbarItem {
      alloc<R = _NSToolbarExternalDragItem>(): R;
      new: <R = _NSToolbarExternalDragItem>() => R;
    }
  }
}
