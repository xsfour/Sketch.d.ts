/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuTrackingInfoProtocol<T = any> extends cocoa.NSObjectProtocol {
    targetedItemFrame<R = cocoa.CGRect>(): R;
    targetedItem<R = cocoa.NSMenuItem>(): R;
    selectedItem<R = cocoa.NSMenuItem>(): R;
    menu<R = cocoa.NSMenu>(): R;
  }
  namespace classes {
    export interface NSMenuTrackingInfoProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSMenuTrackingInfoProtocol: cocoa.classes.NSMenuTrackingInfoProtocol;
