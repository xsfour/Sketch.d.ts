/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpToolbarItem<T = any> extends MSToolbarItem {}
  namespace classes {
    export interface MSPopUpToolbarItem<T = any> extends MSToolbarItem {
      alloc<R = MSPopUpToolbarItem>(): R;
      new: <R = MSPopUpToolbarItem>() => R;
    }
  }
}

declare const MSPopUpToolbarItem: cocoa.classes.MSPopUpToolbarItem;
