/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyOrientationAction<T = any> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    layerHasOurOrientation<R = boolean, P0 = unknown>(_layerHasOurOrientation: P0): R;
    comparisonResultToTest<R = number>(): R;
  }
  namespace classes {
    export interface MSApplyOrientationAction<T = any> extends MSDocumentAction {
      alloc<R = MSApplyOrientationAction>(): R;
      new: <R = MSApplyOrientationAction>() => R;
    }
  }
}

declare const MSApplyOrientationAction: cocoa.classes.MSApplyOrientationAction;
