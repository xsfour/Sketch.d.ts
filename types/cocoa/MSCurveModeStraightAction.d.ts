/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeStraightAction<T = any> extends cocoa.MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCurveModeStraightAction<T = any> extends cocoa.classes.MSCurveModeAdjustAction {
      alloc<R = MSCurveModeStraightAction>(): R;
      new: <R = MSCurveModeStraightAction>() => R;
    }
  }
}

declare const MSCurveModeStraightAction: cocoa.classes.MSCurveModeStraightAction;
