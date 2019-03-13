/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSColorPanelToolbarItem<T = any> extends NSToolbarItem {
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace classes {
    export interface _NSColorPanelToolbarItem<T = any> extends NSToolbarItem {
      alloc<R = _NSColorPanelToolbarItem>(): R;
      new: <R = _NSColorPanelToolbarItem>() => R;
    }
  }
}
