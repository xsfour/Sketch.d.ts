/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowDevice<T = any> extends cocoa.NSObject {
    touchDevice<R = cocoa.NSTouchDevice>(): R;
    frame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface NSFunctionRowDevice<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFunctionRowDevice>(): R;
      new: <R = NSFunctionRowDevice>() => R;
      deviceDimmed<R = boolean>(): R;
      defaultFunctionRowDevice<R = unknown>(): R;
      functionRowDevices<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSFunctionRowDevice: cocoa.classes.NSFunctionRowDevice;
