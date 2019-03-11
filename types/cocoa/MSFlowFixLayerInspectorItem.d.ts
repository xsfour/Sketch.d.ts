/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowFixLayerInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSLayerChangeObserverProtocol {
    validateFixLayersToViewportButton<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    fixToViewportButton<R = cocoa.NSButton>(): R;
    setFixToViewportButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFlowFixLayerInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSLayerChangeObserverProtocol {
      alloc<R = MSFlowFixLayerInspectorItem>(): R;
      new: <R = MSFlowFixLayerInspectorItem>() => R;
    }
  }
}

declare const MSFlowFixLayerInspectorItem: cocoa.classes.MSFlowFixLayerInspectorItem;
