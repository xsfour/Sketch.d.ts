/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowBaseAction<T = any> extends MSDocumentAction {
    refreshLayerListInspectorAndOverlay<R = void>(): R;
  }
  namespace classes {
    export interface MSFlowBaseAction<T = any> extends MSDocumentAction {
      alloc<R = MSFlowBaseAction>(): R;
      new: <R = MSFlowBaseAction>() => R;
    }
  }
}

declare const MSFlowBaseAction: cocoa.classes.MSFlowBaseAction;
