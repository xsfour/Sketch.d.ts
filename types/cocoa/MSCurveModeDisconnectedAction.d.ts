/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeDisconnectedAction<T = any> extends cocoa.MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCurveModeDisconnectedAction<T = any> extends cocoa.classes.MSCurveModeAdjustAction {
      alloc<R = MSCurveModeDisconnectedAction>(): R;
      new: <R = MSCurveModeDisconnectedAction>() => R;
    }
  }
}

declare const MSCurveModeDisconnectedAction: cocoa.classes.MSCurveModeDisconnectedAction;
