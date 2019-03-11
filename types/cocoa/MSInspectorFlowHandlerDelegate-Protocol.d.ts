/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFlowHandlerDelegateProtocol<T = any> {
    layersForFlowHandler<R = cocoa.MSLayerArray, P0 = cocoa.MSInspectorFlowHandler>(_layersForFlowHandler: P0): R;
    documentForFlowHandler<R = cocoa.MSDocument, P0 = cocoa.MSInspectorFlowHandler>(_documentForFlowHandler: P0): R;
  }
  namespace classes {
    export interface MSInspectorFlowHandlerDelegateProtocol<T = any> {  }
  }
}

declare const MSInspectorFlowHandlerDelegateProtocol: cocoa.classes.MSInspectorFlowHandlerDelegateProtocol;
