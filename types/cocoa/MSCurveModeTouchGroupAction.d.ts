/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeTouchGroupAction<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSCurveModeTouchGroupAction<T = any> extends MSActionGroup {
      alloc<R = MSCurveModeTouchGroupAction>(): R;
      new: <R = MSCurveModeTouchGroupAction>() => R;
    }
  }
}

declare const MSCurveModeTouchGroupAction: cocoa.classes.MSCurveModeTouchGroupAction;
