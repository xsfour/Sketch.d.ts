/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNetworkHelper<T = any> extends NSObject {}
  namespace classes {
    export interface MSNetworkHelper<T = any> extends NSObject {
      alloc<R = MSNetworkHelper>(): R;
      new: <R = MSNetworkHelper>() => R;
      currentIPv4Address<R = unknown>(): R;
      currentSubnet<R = unknown>(): R;
      isValidIPWithPort<R = boolean, P0 = unknown>(_isValidIPWithPort: P0): R;
      isValidIP<R = boolean, P0 = unknown>(_isValidIP: P0): R;
    }
  }
}

declare const MSNetworkHelper: cocoa.classes.MSNetworkHelper;
