/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersBottomAction<T = any> extends cocoa.MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersBottom<R = void, P0 = unknown>(_alignLayersBottom: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersBottomAction<T = any> extends cocoa.classes.MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersBottomAction>(): R;
      new: <R = MSAlignLayersBottomAction>() => R;
    }
  }
}

declare const MSAlignLayersBottomAction: cocoa.classes.MSAlignLayersBottomAction;
