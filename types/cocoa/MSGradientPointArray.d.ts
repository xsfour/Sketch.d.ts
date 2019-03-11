/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientPointArray<T = any> extends cocoa.MSPointArray {
    delegate<R = cocoa.MSGradientPointArrayDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSGradientPointArrayDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSGradientPointArray<T = any> extends cocoa.classes.MSPointArray {
      alloc<R = MSGradientPointArray>(): R;
      new: <R = MSGradientPointArray>() => R;
    }
  }
}

declare const MSGradientPointArray: cocoa.classes.MSGradientPointArray;
