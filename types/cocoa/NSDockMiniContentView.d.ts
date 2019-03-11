/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockMiniContentView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface NSDockMiniContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSDockMiniContentView>(): R;
      new: <R = NSDockMiniContentView>() => R;
    }
  }
}

declare const NSDockMiniContentView: cocoa.classes.NSDockMiniContentView;
