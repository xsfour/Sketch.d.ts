/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOperatingSystem<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSOperatingSystem<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOperatingSystem>(): R;
      new: <R = MSOperatingSystem>() => R;
      systemVersionString<R = unknown>(): R;
      isOperatingSystemAtLeastVersion<R = boolean, P0 = unknown>(_isOperatingSystemAtLeastVersion: P0): R;
      operatingSystemVersion<R = unknown>(): R;
    }
  }
}

declare const MSOperatingSystem: cocoa.classes.MSOperatingSystem;
