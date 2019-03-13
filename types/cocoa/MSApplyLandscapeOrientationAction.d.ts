/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyLandscapeOrientationAction<T = any> extends MSApplyOrientationAction {
    label<R = unknown>(): R;
    applyLandscapeOrientation<R = void, P0 = unknown>(_applyLandscapeOrientation: P0): R;
  }
  namespace classes {
    export interface MSApplyLandscapeOrientationAction<T = any> extends MSApplyOrientationAction {
      alloc<R = MSApplyLandscapeOrientationAction>(): R;
      new: <R = MSApplyLandscapeOrientationAction>() => R;
    }
  }
}

declare const MSApplyLandscapeOrientationAction: cocoa.classes.MSApplyLandscapeOrientationAction;
