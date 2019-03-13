/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCDevice<T = any> extends NSObject {}
  namespace classes {
    export interface BCDevice<T = any> extends NSObject {
      alloc<R = BCDevice>(): R;
      new: <R = BCDevice>() => R;
      macModel<R = unknown>(): R;
      currentOSVersion<R = unknown>(): R;
    }
  }
}

declare const BCDevice: cocoa.classes.BCDevice;
