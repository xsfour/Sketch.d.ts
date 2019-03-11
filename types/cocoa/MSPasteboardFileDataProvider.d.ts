/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardFileDataProvider<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSPasteboardFileDataProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPasteboardFileDataProvider>(): R;
      new: <R = MSPasteboardFileDataProvider>() => R;
      buildExportRequestsForLayers_inFolder<R = unknown, P0 = unknown, P1 = unknown>(_buildExportRequestsForLayers: P0, _inFolder: P1): R;
      uniqueExportURLForLayer_inFolder_comparingTo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_uniqueExportURLForLayer: P0, _inFolder: P1, _comparingTo: P2): R;
      extensionForExportingLayer<R = unknown, P0 = unknown>(_extensionForExportingLayer: P0): R;
      exportLayers_toFolder<R = unknown, P0 = unknown, P1 = unknown>(_exportLayers: P0, _toFolder: P1): R;
      addLayers_toPasteboard<R = void, P0 = unknown, P1 = unknown>(_addLayers: P0, _toPasteboard: P1): R;
    }
  }
}

declare const MSPasteboardFileDataProvider: cocoa.classes.MSPasteboardFileDataProvider;
