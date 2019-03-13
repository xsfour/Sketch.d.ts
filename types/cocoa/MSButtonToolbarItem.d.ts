/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSButtonToolbarItem<T = any> extends MSToolbarItem {
    setToolTip<R = void, P0 = unknown>(_setToolTip: P0): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
  }
  namespace classes {
    export interface MSButtonToolbarItem<T = any> extends MSToolbarItem {
      alloc<R = MSButtonToolbarItem>(): R;
      new: <R = MSButtonToolbarItem>() => R;
    }
  }
}

declare const MSButtonToolbarItem: cocoa.classes.MSButtonToolbarItem;
