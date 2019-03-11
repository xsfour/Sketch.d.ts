/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTipStringDrawingLayoutManager<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _sizeWithSize_attributedString<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = unknown>(__sizeWithSize: P0, _attributedString: P1): R;
    _wrappingAttributes<R = unknown>(): R;
    wrappingAttributes<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface NSToolTipStringDrawingLayoutManager<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSToolTipStringDrawingLayoutManager>(): R;
      new: <R = NSToolTipStringDrawingLayoutManager>() => R;
      sizeForDisplayingAttributedString<R = cocoa.CGSize, P0 = unknown>(_sizeForDisplayingAttributedString: P0): R;
      sharedToolTipStringDrawingLayoutManager<R = unknown>(): R;
    }
  }
}

declare const NSToolTipStringDrawingLayoutManager: cocoa.classes.NSToolTipStringDrawingLayoutManager;
