/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridEmptyContentView<T = any> extends cocoa.NSView {
    _allocatingPlaceholder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSGridEmptyContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSGridEmptyContentView>(): R;
      new: <R = NSGridEmptyContentView>() => R;
    }
  }
}

declare const NSGridEmptyContentView: cocoa.classes.NSGridEmptyContentView;
