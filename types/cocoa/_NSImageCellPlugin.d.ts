/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageCellPlugin<T = any> extends _NSImageViewPlugin {}
  namespace classes {
    export interface _NSImageCellPlugin<T = any> extends _NSImageViewPlugin {
      alloc<R = _NSImageCellPlugin>(): R;
      new: <R = _NSImageCellPlugin>() => R;
    }
  }
}
