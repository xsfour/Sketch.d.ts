/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowDevice<T = any> extends NSObject {
    touchDevice<R = NSTouchDevice>(): R;
    frame<R = CGRect>(): R;
  }
  namespace classes {
    export interface NSFunctionRowDevice<T = any> extends NSObject {
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
