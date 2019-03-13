/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientPointArray<T = any> extends MSPointArray {
    delegate<R = MSGradientPointArrayDelegate>(): R;
    setDelegate<R = void, P0 = MSGradientPointArrayDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSGradientPointArray<T = any> extends MSPointArray {
      alloc<R = MSGradientPointArray>(): R;
      new: <R = MSGradientPointArray>() => R;
    }
  }
}

declare const MSGradientPointArray: cocoa.classes.MSGradientPointArray;
