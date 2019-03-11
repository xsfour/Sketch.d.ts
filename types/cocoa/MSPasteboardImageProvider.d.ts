/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImageProvider<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    data<R = cocoa.NSData>(): R;
    setData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    request<R = cocoa.MSExportRequest>(): R;
    setRequest<R = void, P0 = cocoa.MSExportRequest>(_v: P0): R;
    queue<R = cocoa.NSOperationQueue>(): R;
  }
  namespace classes {
    export interface MSPasteboardImageProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPasteboardImageProvider>(): R;
      new: <R = MSPasteboardImageProvider>() => R;
      preparePasteboard_withExportRequest<R = void, P0 = unknown, P1 = unknown>(_preparePasteboard: P0, _withExportRequest: P1): R;
    }
  }
}

declare const MSPasteboardImageProvider: cocoa.classes.MSPasteboardImageProvider;
