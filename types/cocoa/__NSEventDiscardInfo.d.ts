/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSEventDiscardInfo<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface __NSEventDiscardInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = __NSEventDiscardInfo>(): R;
      new: <R = __NSEventDiscardInfo>() => R;
    }
  }
}
