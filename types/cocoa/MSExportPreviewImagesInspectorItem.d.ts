/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewImagesInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSLayerChangeObserverProtocol {
    setPreviewsWithViewModels<R = void, P0 = unknown>(_setPreviewsWithViewModels: P0): R;
    reloadPreviewViews<R = void>(): R;
    removeAllPreviewViews<R = void>(): R;
    schedulePreviewViewReload<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    throttleCount<R = number>(): R;
    setThrottleCount<R = void, P0 = number>(_v: P0): R;
    previewViews<R = cocoa.NSArray>(): R;
    setPreviewViews<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportPreviewImagesInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSLayerChangeObserverProtocol {
      alloc<R = MSExportPreviewImagesInspectorItem>(): R;
      new: <R = MSExportPreviewImagesInspectorItem>() => R;
      setFrameOfViewModels_withInspectorWidth<R = void, P0 = unknown, P1 = number>(_setFrameOfViewModels: P0, _withInspectorWidth: P1): R;
      previewImageSizeForNumColumns<R = cocoa.CGSize, P0 = number>(_previewImageSizeForNumColumns: P0): R;
      previewViewSizeForNumColumns<R = cocoa.CGSize, P0 = number>(_previewViewSizeForNumColumns: P0): R;
      reloadPreviewsForLayers_withCompletion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_reloadPreviewsForLayers: P0, _withCompletion: P1): R;
    }
  }
}

declare const MSExportPreviewImagesInspectorItem: cocoa.classes.MSExportPreviewImagesInspectorItem;
