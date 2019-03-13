/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuTrackingInfoProtocol<T = any> extends NSObjectProtocol {
    targetedItemFrame<R = CGRect>(): R;
    targetedItem<R = NSMenuItem>(): R;
    selectedItem<R = NSMenuItem>(): R;
    menu<R = NSMenu>(): R;
  }
  namespace classes {
    export interface NSMenuTrackingInfoProtocol<T = any> extends NSObjectProtocol {  }
  }
}
