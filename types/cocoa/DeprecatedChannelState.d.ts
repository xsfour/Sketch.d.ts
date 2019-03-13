/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface DeprecatedChannelState<T = any> extends NSObject {
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface DeprecatedChannelState<T = any> extends NSObject {
      alloc<R = DeprecatedChannelState>(): R;
      new: <R = DeprecatedChannelState>() => R;
    }
  }
}

declare const DeprecatedChannelState: cocoa.classes.DeprecatedChannelState;
