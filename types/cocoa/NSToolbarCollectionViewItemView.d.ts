/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarCollectionViewItemView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSToolbarCollectionViewItemView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSToolbarCollectionViewItemView>(): R;
      new: <R = NSToolbarCollectionViewItemView>() => R;
    }
  }
}

declare const NSToolbarCollectionViewItemView: cocoa.classes.NSToolbarCollectionViewItemView;
