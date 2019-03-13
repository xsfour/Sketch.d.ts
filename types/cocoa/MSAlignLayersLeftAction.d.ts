/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersLeftAction<T = any> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersLeft<R = void, P0 = unknown>(_alignLayersLeft: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersLeftAction<T = any> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersLeftAction>(): R;
      new: <R = MSAlignLayersLeftAction>() => R;
    }
  }
}

declare const MSAlignLayersLeftAction: cocoa.classes.MSAlignLayersLeftAction;
