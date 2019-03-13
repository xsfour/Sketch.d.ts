/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFlowHandlerDelegateProtocol<T = any> {
    layersForFlowHandler<R = MSLayerArray, P0 = MSInspectorFlowHandler>(_layersForFlowHandler: P0): R;
    documentForFlowHandler<R = MSDocument, P0 = MSInspectorFlowHandler>(_documentForFlowHandler: P0): R;
  }
  namespace classes {
    export interface MSInspectorFlowHandlerDelegateProtocol<T = any> {  }
  }
}
