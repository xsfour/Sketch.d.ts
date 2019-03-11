/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyPortraitOrientationAction<T = any> extends cocoa.MSApplyOrientationAction {
    label<R = unknown>(): R;
    applyPortraitOrientation<R = void, P0 = unknown>(_applyPortraitOrientation: P0): R;
  }
  namespace classes {
    export interface MSApplyPortraitOrientationAction<T = any> extends cocoa.classes.MSApplyOrientationAction {
      alloc<R = MSApplyPortraitOrientationAction>(): R;
      new: <R = MSApplyPortraitOrientationAction>() => R;
    }
  }
}

declare const MSApplyPortraitOrientationAction: cocoa.classes.MSApplyPortraitOrientationAction;
