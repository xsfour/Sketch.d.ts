/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveTextTransformAction<T = any> extends MSTextTransformAction {
    label<R = unknown>(): R;
    removeTextTransform<R = void, P0 = unknown>(_removeTextTransform: P0): R;
  }
  namespace classes {
    export interface MSRemoveTextTransformAction<T = any> extends MSTextTransformAction {
      alloc<R = MSRemoveTextTransformAction>(): R;
      new: <R = MSRemoveTextTransformAction>() => R;
    }
  }
}

declare const MSRemoveTextTransformAction: cocoa.classes.MSRemoveTextTransformAction;
