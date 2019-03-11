/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarLayoutItem<T = any> extends cocoa.NSObject, cocoa._NSTouchBarItemLayoutWrapperProtocol {
    visibilityPriority<R = number>(): R;
    initWithTouchBarItem<R = unknown, P0 = unknown>(_initWithTouchBarItem: P0): R;
    isSpace<R = boolean>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    itemPosition<R = number>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarLayoutItem<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarLayoutItem>(): R;
      new: <R = NSTouchBarLayoutItem>() => R;
    }
  }
}

declare const NSTouchBarLayoutItem: cocoa.classes.NSTouchBarLayoutItem;
