/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingInfoImpl<T = any> extends NSObject, NSMenuTrackingInfoProtocol {
    dealloc<R = void>(): R;
    targetedItemFrame<R = CGRect>(): R;
    targetedItem<R = NSMenuItem>(): R;
    selectedItem<R = NSMenuItem>(): R;
    menu<R = NSMenu>(): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTrackingInfoImpl<T = any> extends NSObject, NSMenuTrackingInfoProtocol {
      alloc<R = NSTrackingInfoImpl>(): R;
      new: <R = NSTrackingInfoImpl>() => R;
    }
  }
}

declare const NSTrackingInfoImpl: cocoa.classes.NSTrackingInfoImpl;
