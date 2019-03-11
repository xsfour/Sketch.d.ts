/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeAsymmetricAction<T = any> extends cocoa.MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCurveModeAsymmetricAction<T = any> extends cocoa.classes.MSCurveModeAdjustAction {
      alloc<R = MSCurveModeAsymmetricAction>(): R;
      new: <R = MSCurveModeAsymmetricAction>() => R;
    }
  }
}

declare const MSCurveModeAsymmetricAction: cocoa.classes.MSCurveModeAsymmetricAction;
