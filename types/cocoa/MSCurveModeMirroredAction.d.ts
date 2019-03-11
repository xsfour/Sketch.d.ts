/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeMirroredAction<T = any> extends cocoa.MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCurveModeMirroredAction<T = any> extends cocoa.classes.MSCurveModeAdjustAction {
      alloc<R = MSCurveModeMirroredAction>(): R;
      new: <R = MSCurveModeMirroredAction>() => R;
    }
  }
}

declare const MSCurveModeMirroredAction: cocoa.classes.MSCurveModeMirroredAction;
