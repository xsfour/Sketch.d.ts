/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceExportGroupContentsOnlyInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSLayerChangeObserverProtocol {
    groupContentsOnlyAction<R = void, P0 = unknown>(_groupContentsOnlyAction: P0): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    groupContentsOnlyButton<R = cocoa.NSButton>(): R;
    setGroupContentsOnlyButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSliceExportGroupContentsOnlyInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSLayerChangeObserverProtocol {
      alloc<R = MSSliceExportGroupContentsOnlyInspectorItem>(): R;
      new: <R = MSSliceExportGroupContentsOnlyInspectorItem>() => R;
    }
  }
}

declare const MSSliceExportGroupContentsOnlyInspectorItem: cocoa.classes.MSSliceExportGroupContentsOnlyInspectorItem;
