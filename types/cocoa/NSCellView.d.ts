/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellView<T = any> extends NSControl {}
  namespace classes {
    export interface NSCellView<T = any> extends NSControl {
      alloc<R = NSCellView>(): R;
      new: <R = NSCellView>() => R;
    }
  }
}

declare const NSCellView: cocoa.classes.NSCellView;
