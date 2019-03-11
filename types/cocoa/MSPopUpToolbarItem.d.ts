/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpToolbarItem<T = any> extends cocoa.MSToolbarItem {}
  namespace classes {
    export interface MSPopUpToolbarItem<T = any> extends cocoa.classes.MSToolbarItem {
      alloc<R = MSPopUpToolbarItem>(): R;
      new: <R = MSPopUpToolbarItem>() => R;
    }
  }
}

declare const MSPopUpToolbarItem: cocoa.classes.MSPopUpToolbarItem;
