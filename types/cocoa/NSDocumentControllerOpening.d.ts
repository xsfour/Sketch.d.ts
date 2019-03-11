/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerOpening<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    recentDocumentRecordsKey<R = cocoa.NSString>(): R;
    setRecentDocumentRecordsKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
    documentWasAlreadyOpen<R = boolean>(): R;
    setDocumentWasAlreadyOpen<R = void, P0 = boolean>(_v: P0): R;
    document<R = cocoa.NSDocument>(): R;
    setDocument<R = void, P0 = cocoa.NSDocument>(_v: P0): R;
    seamlessOpener<R = cocoa.QLSeamlessDocumentOpener>(): R;
    setSeamlessOpener<R = void, P0 = cocoa.QLSeamlessDocumentOpener>(_v: P0): R;
    url<R = cocoa.NSURL>(): R;
    setUrl<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentControllerOpening<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDocumentControllerOpening>(): R;
      new: <R = NSDocumentControllerOpening>() => R;
    }
  }
}

declare const NSDocumentControllerOpening: cocoa.classes.NSDocumentControllerOpening;
