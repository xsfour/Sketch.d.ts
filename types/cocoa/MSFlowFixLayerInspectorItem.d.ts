/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowFixLayerInspectorItem<T = any> extends MSInspectorItem, MSLayerChangeObserverProtocol {
    validateFixLayersToViewportButton<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    fixToViewportButton<R = NSButton>(): R;
    setFixToViewportButton<R = void, P0 = NSButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFlowFixLayerInspectorItem<T = any> extends MSInspectorItem, MSLayerChangeObserverProtocol {
      alloc<R = MSFlowFixLayerInspectorItem>(): R;
      new: <R = MSFlowFixLayerInspectorItem>() => R;
    }
  }
}

declare const MSFlowFixLayerInspectorItem: cocoa.classes.MSFlowFixLayerInspectorItem;
