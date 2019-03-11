/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOMethod<T = any> extends cocoa.NSObject {
    target<R = unknown>(): R;
    selector<R = string>(): R;
  }
  namespace classes {
    export interface MOMethod<T = any> extends cocoa.classes.NSObject {
      alloc<R = MOMethod>(): R;
      new: <R = MOMethod>() => R;
      methodWithTarget_selector<R = cocoa.MOMethod, P0 = unknown, P1 = string>(_methodWithTarget: P0, _selector: P1): R;
    }
  }
}

declare const MOMethod: cocoa.classes.MOMethod;
