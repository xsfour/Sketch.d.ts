/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellMouseTrackingInfo<T = any> extends NSObject {}
  namespace classes {
    export interface NSCellMouseTrackingInfo<T = any> extends NSObject {
      alloc<R = NSCellMouseTrackingInfo>(): R;
      new: <R = NSCellMouseTrackingInfo>() => R;
    }
  }
}

declare const NSCellMouseTrackingInfo: cocoa.classes.NSCellMouseTrackingInfo;
