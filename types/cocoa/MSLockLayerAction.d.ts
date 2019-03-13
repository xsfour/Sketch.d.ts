/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLockLayerAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    lockLayer<R = void, P0 = unknown>(_lockLayer: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSLockLayerAction<T = any> extends MSDocumentAction {
      alloc<R = MSLockLayerAction>(): R;
      new: <R = MSLockLayerAction>() => R;
    }
  }
}

declare const MSLockLayerAction: cocoa.classes.MSLockLayerAction;
