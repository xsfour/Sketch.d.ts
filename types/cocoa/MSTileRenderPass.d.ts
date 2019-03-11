/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTileRenderPass<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    dirtyRect<R = cocoa.CGRect>(): R;
    setDirtyRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    documentData<R = cocoa.MSImmutableDocumentData>(): R;
    setDocumentData<R = void, P0 = cocoa.MSImmutableDocumentData>(_v: P0): R;
    page<R = cocoa.MSImmutablePage>(): R;
    setPage<R = void, P0 = cocoa.MSImmutablePage>(_v: P0): R;
  }
  namespace classes {
    export interface MSTileRenderPass<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSTileRenderPass>(): R;
      new: <R = MSTileRenderPass>() => R;
      tileRenderPassWithPage_inDocument_dirtyRect_zoomValue<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = number>(_tileRenderPassWithPage: P0, _inDocument: P1, _dirtyRect: P2, _zoomValue: P3): R;
    }
  }
}

declare const MSTileRenderPass: cocoa.classes.MSTileRenderPass;
