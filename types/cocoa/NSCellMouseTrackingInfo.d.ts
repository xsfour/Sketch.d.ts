/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellMouseTrackingInfo<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSCellMouseTrackingInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCellMouseTrackingInfo>(): R;
      new: <R = NSCellMouseTrackingInfo>() => R;
    }
  }
}

declare const NSCellMouseTrackingInfo: cocoa.classes.NSCellMouseTrackingInfo;
