/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersTopAction<T = any> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersTop<R = void, P0 = unknown>(_alignLayersTop: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersTopAction<T = any> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersTopAction>(): R;
      new: <R = MSAlignLayersTopAction>() => R;
    }
  }
}

declare const MSAlignLayersTopAction: cocoa.classes.MSAlignLayersTopAction;
