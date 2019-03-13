/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSEventDiscardInfo<T = any> extends NSObject {}
  namespace classes {
    export interface __NSEventDiscardInfo<T = any> extends NSObject {
      alloc<R = __NSEventDiscardInfo>(): R;
      new: <R = __NSEventDiscardInfo>() => R;
    }
  }
}
