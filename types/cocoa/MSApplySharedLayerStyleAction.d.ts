/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedLayerStyleAction<T = any> extends cocoa.MSApplySharedStyleAction {
    applySharedLayerStyle<R = void, P0 = unknown>(_applySharedLayerStyle: P0): R;
  }
  namespace classes {
    export interface MSApplySharedLayerStyleAction<T = any> extends cocoa.classes.MSApplySharedStyleAction {
      alloc<R = MSApplySharedLayerStyleAction>(): R;
      new: <R = MSApplySharedLayerStyleAction>() => R;
    }
  }
}

declare const MSApplySharedLayerStyleAction: cocoa.classes.MSApplySharedLayerStyleAction;
