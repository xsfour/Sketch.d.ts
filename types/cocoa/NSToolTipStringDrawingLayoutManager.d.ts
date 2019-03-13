/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTipStringDrawingLayoutManager<T = any> extends NSObject {
    dealloc<R = void>(): R;
    _sizeWithSize_attributedString<R = CGSize, P0 = CGSize, P1 = unknown>(__sizeWithSize: P0, _attributedString: P1): R;
    _wrappingAttributes<R = unknown>(): R;
    wrappingAttributes<R = NSDictionary>(): R;
  }
  namespace classes {
    export interface NSToolTipStringDrawingLayoutManager<T = any> extends NSObject {
      alloc<R = NSToolTipStringDrawingLayoutManager>(): R;
      new: <R = NSToolTipStringDrawingLayoutManager>() => R;
      sizeForDisplayingAttributedString<R = CGSize, P0 = unknown>(_sizeForDisplayingAttributedString: P0): R;
      sharedToolTipStringDrawingLayoutManager<R = unknown>(): R;
    }
  }
}

declare const NSToolTipStringDrawingLayoutManager: cocoa.classes.NSToolTipStringDrawingLayoutManager;
