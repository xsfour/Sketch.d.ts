/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerListImageProvider<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSPasteboardLayerListImageProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPasteboardLayerListImageProvider>(): R;
      new: <R = MSPasteboardLayerListImageProvider>() => R;
      addLayer_toPasteboard<R = void, P0 = unknown, P1 = unknown>(_addLayer: P0, _toPasteboard: P1): R;
    }
  }
}

declare const MSPasteboardLayerListImageProvider: cocoa.classes.MSPasteboardLayerListImageProvider;
