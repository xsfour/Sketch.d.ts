/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowBaseAction<T = any> extends cocoa.MSDocumentAction {
    refreshLayerListInspectorAndOverlay<R = void>(): R;
  }
  namespace classes {
    export interface MSFlowBaseAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSFlowBaseAction>(): R;
      new: <R = MSFlowBaseAction>() => R;
    }
  }
}

declare const MSFlowBaseAction: cocoa.classes.MSFlowBaseAction;
