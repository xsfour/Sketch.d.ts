/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersRightAction<T = any> extends cocoa.MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersRight<R = void, P0 = unknown>(_alignLayersRight: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersRightAction<T = any> extends cocoa.classes.MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersRightAction>(): R;
      new: <R = MSAlignLayersRightAction>() => R;
    }
  }
}

declare const MSAlignLayersRightAction: cocoa.classes.MSAlignLayersRightAction;
