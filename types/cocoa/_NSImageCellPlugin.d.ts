/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageCellPlugin<T = any> extends cocoa._NSImageViewPlugin {}
  namespace classes {
    export interface _NSImageCellPlugin<T = any> extends cocoa.classes._NSImageViewPlugin {
      alloc<R = _NSImageCellPlugin>(): R;
      new: <R = _NSImageCellPlugin>() => R;
    }
  }
}
