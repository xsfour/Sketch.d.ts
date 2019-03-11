/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingInfoImpl<T = any> extends cocoa.NSObject, cocoa.NSMenuTrackingInfoProtocol {
    dealloc<R = void>(): R;
    targetedItemFrame<R = cocoa.CGRect>(): R;
    targetedItem<R = cocoa.NSMenuItem>(): R;
    selectedItem<R = cocoa.NSMenuItem>(): R;
    menu<R = cocoa.NSMenu>(): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTrackingInfoImpl<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuTrackingInfoProtocol {
      alloc<R = NSTrackingInfoImpl>(): R;
      new: <R = NSTrackingInfoImpl>() => R;
    }
  }
}

declare const NSTrackingInfoImpl: cocoa.classes.NSTrackingInfoImpl;
