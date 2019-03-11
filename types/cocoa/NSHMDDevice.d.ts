/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDDevice<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithSLSHMD<R = unknown, P0 = unknown>(_initWithSLSHMD: P0): R;
    productID<R = number>(): R;
    vendorID<R = number>(): R;
    name<R = cocoa.NSString>(): R;
    awake<R = boolean>(): R;
    available<R = boolean>(): R;
    attached<R = boolean>(): R;
  }
  namespace classes {
    export interface NSHMDDevice<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHMDDevice>(): R;
      new: <R = NSHMDDevice>() => R;
      keyPathsForValuesAffectingAttached<R = unknown>(): R;
      devices<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSHMDDevice: cocoa.classes.NSHMDDevice;
