/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersMiddleAction<T = any> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersMiddle<R = void, P0 = unknown>(_alignLayersMiddle: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersMiddleAction<T = any> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersMiddleAction>(): R;
      new: <R = MSAlignLayersMiddleAction>() => R;
    }
  }
}

declare const MSAlignLayersMiddleAction: cocoa.classes.MSAlignLayersMiddleAction;
