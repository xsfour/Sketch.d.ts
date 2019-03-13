/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarLayoutItem<T = any> extends NSObject, _NSTouchBarItemLayoutWrapperProtocol {
    visibilityPriority<R = number>(): R;
    initWithTouchBarItem<R = unknown, P0 = unknown>(_initWithTouchBarItem: P0): R;
    isSpace<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    contentClippingSize<R = CGSize>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    itemPosition<R = number>(): R;
    preferredSize<R = CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarLayoutItem<T = any> extends NSObject, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarLayoutItem>(): R;
      new: <R = NSTouchBarLayoutItem>() => R;
    }
  }
}

declare const NSTouchBarLayoutItem: cocoa.classes.NSTouchBarLayoutItem;
