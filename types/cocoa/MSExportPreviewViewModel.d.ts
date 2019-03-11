/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewViewModel<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    imageDataInFormat<R = unknown, P0 = unknown>(_imageDataInFormat: P0): R;
    initWithPreviewImage_cachedExportRequest_ancestry<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPreviewImage: P0, _cachedExportRequest: P1, _ancestry: P2): R;
    previewFrame<R = cocoa.CGRect>(): R;
    setPreviewFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    isVectorFormat<R = boolean>(): R;
    defaultExportFormat<R = cocoa.NSString>(): R;
    layerName<R = cocoa.NSString>(): R;
    cachedExportRequest<R = cocoa.MSExportRequest>(): R;
    setCachedExportRequest<R = void, P0 = cocoa.MSExportRequest>(_v: P0): R;
    previewImage<R = cocoa.NSImage>(): R;
    setPreviewImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportPreviewViewModel<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSExportPreviewViewModel>(): R;
      new: <R = MSExportPreviewViewModel>() => R;
    }
  }
}

declare const MSExportPreviewViewModel: cocoa.classes.MSExportPreviewViewModel;
