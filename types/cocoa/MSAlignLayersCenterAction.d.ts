/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersCenterAction<T = any> extends cocoa.MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersCenter<R = void, P0 = unknown>(_alignLayersCenter: P0): R;
  }
  namespace classes {
    export interface MSAlignLayersCenterAction<T = any> extends cocoa.classes.MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersCenterAction>(): R;
      new: <R = MSAlignLayersCenterAction>() => R;
    }
  }
}

declare const MSAlignLayersCenterAction: cocoa.classes.MSAlignLayersCenterAction;
