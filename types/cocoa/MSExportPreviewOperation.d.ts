/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewOperation<T = any> extends cocoa.NSOperation {
    cxx_destruct<R = void>(): R;
    exportingColorSpace<R = unknown>(): R;
    initWithAncestry_imageSize<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(_initWithAncestry: P0, _imageSize: P1): R;
    previewImage<R = cocoa.NSImage>(): R;
    setPreviewImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    imageSize<R = cocoa.CGSize>(): R;
    setImageSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    request<R = cocoa.MSExportRequest>(): R;
    setRequest<R = void, P0 = cocoa.MSExportRequest>(_v: P0): R;
    ancestry<R = cocoa.MSImmutableLayerAncestry>(): R;
    setAncestry<R = void, P0 = cocoa.MSImmutableLayerAncestry>(_v: P0): R;
    previewViewModel<R = cocoa.MSExportPreviewViewModel>(): R;
  }
  namespace classes {
    export interface MSExportPreviewOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = MSExportPreviewOperation>(): R;
      new: <R = MSExportPreviewOperation>() => R;
      sharedPreviewRenderQueue<R = unknown>(): R;
    }
  }
}

declare const MSExportPreviewOperation: cocoa.classes.MSExportPreviewOperation;
