/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextSnapItem<T = any> extends cocoa.MSSnapItem {
    supportsResizingForSnapping<R = boolean>(): R;
  }
  namespace classes {
    export interface MSTextSnapItem<T = any> extends cocoa.classes.MSSnapItem {
      alloc<R = MSTextSnapItem>(): R;
      new: <R = MSTextSnapItem>() => R;
    }
  }
}

declare const MSTextSnapItem: cocoa.classes.MSTextSnapItem;
