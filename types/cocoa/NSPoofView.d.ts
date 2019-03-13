/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPoofView<T = any> extends NSView {
    displayPoofImageAtIndex<R = void, P0 = number>(_displayPoofImageAtIndex: P0): R;
  }
  namespace classes {
    export interface NSPoofView<T = any> extends NSView {
      alloc<R = NSPoofView>(): R;
      new: <R = NSPoofView>() => R;
    }
  }
}

declare const NSPoofView: cocoa.classes.NSPoofView;
