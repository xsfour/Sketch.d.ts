/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenterLayersInCanvasAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    centerLayersInCanvas<R = void, P0 = unknown>(_centerLayersInCanvas: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSCenterLayersInCanvasAction<T = any> extends MSDocumentAction {
      alloc<R = MSCenterLayersInCanvasAction>(): R;
      new: <R = MSCenterLayersInCanvasAction>() => R;
    }
  }
}

declare const MSCenterLayersInCanvasAction: cocoa.classes.MSCenterLayersInCanvasAction;
