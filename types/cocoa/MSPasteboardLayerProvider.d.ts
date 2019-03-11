/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerProvider<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    data<R = cocoa.NSData>(): R;
    setData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    queue<R = cocoa.NSOperationQueue>(): R;
  }
  namespace classes {
    export interface MSPasteboardLayerProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPasteboardLayerProvider>(): R;
      new: <R = MSPasteboardLayerProvider>() => R;
      providerForDictionary<R = unknown, P0 = unknown>(_providerForDictionary: P0): R;
    }
  }
}

declare const MSPasteboardLayerProvider: cocoa.classes.MSPasteboardLayerProvider;
