/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarClippedItemsIndicatorViewer<T = any> extends cocoa.NSView, cocoa._NSTouchBarItemLayoutWrapperProtocol {
    configureForLayoutInDisplayMode_andSizeMode_inToolbarView<R = void, P0 = number, P1 = number, P2 = unknown>(_configureForLayoutInDisplayMode: P0, _andSizeMode: P1, _inToolbarView: P2): R;
    itemPosition<R = number>(): R;
    isSpace<R = boolean>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    clippedItemsIndicator<R = cocoa.NSToolbarClippedItemsIndicator>(): R;
    setClippedItemsIndicator<R = void, P0 = cocoa.NSToolbarClippedItemsIndicator>(_v: P0): R;
    _needsModeConfiguration<R = boolean>(): R;
    set_needsModeConfiguration<R = void, P0 = boolean>(_v: P0): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSToolbarClippedItemsIndicatorViewer<T = any> extends cocoa.classes.NSView, cocoa.classes._NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSToolbarClippedItemsIndicatorViewer>(): R;
      new: <R = NSToolbarClippedItemsIndicatorViewer>() => R;
    }
  }
}

declare const NSToolbarClippedItemsIndicatorViewer: cocoa.classes.NSToolbarClippedItemsIndicatorViewer;
