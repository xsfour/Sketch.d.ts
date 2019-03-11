/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanelOldAccessoryController<T = any> extends cocoa.NSViewController, cocoa.NSPrintPanelAccessorizingProtocol {}
  namespace classes {
    export interface NSPrintPanelOldAccessoryController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSPrintPanelAccessorizingProtocol {
      alloc<R = NSPrintPanelOldAccessoryController>(): R;
      new: <R = NSPrintPanelOldAccessoryController>() => R;
    }
  }
}

declare const NSPrintPanelOldAccessoryController: cocoa.classes.NSPrintPanelOldAccessoryController;
