/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFindLayerAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    findLayer<R = void, P0 = unknown>(_findLayer: P0): R;
  }
  namespace classes {
    export interface MSFindLayerAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSFindLayerAction>(): R;
      new: <R = MSFindLayerAction>() => R;
    }
  }
}

declare const MSFindLayerAction: cocoa.classes.MSFindLayerAction;
