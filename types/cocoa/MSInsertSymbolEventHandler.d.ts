/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSymbolEventHandler<T = any> extends cocoa.MSEventHandler {
    generatePreviewAndRefreshWhenDone<R = void>(): R;
    pasteboardContainsSymbolInfo<R = boolean, P0 = unknown>(_pasteboardContainsSymbolInfo: P0): R;
    previewImage<R = unknown>(): R;
    rectAroundMouseFromBoundsCoordinates<R = cocoa.CGRect, P0 = cocoa.CGRect>(_rectAroundMouseFromBoundsCoordinates: P0): R;
    originForInserting<R = cocoa.CGPoint>(): R;
    previewRectForInserting<R = cocoa.CGRect>(): R;
    refresh<R = void>(): R;
    insertSymbolAtCurrentMouseLocation<R = boolean>(): R;
    snapperData<R = cocoa.MSSnapperData>(): R;
    setSnapperData<R = void, P0 = cocoa.MSSnapperData>(_v: P0): R;
    renderQueue<R = cocoa.NSOperationQueue>(): R;
    setRenderQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    previewImages<R = cocoa.NSMutableDictionary>(): R;
    setPreviewImages<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    isMakingPreview<R = boolean>(): R;
    setIsMakingPreview<R = void, P0 = boolean>(_v: P0): R;
    mouseLocation<R = cocoa.CGPoint>(): R;
    setMouseLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    symbolReference<R = cocoa.MSSymbolMasterReference>(): R;
    setSymbolReference<R = void, P0 = cocoa.MSSymbolMasterReference>(_v: P0): R;
  }
  namespace classes {
    export interface MSInsertSymbolEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSInsertSymbolEventHandler>(): R;
      new: <R = MSInsertSymbolEventHandler>() => R;
    }
  }
}

declare const MSInsertSymbolEventHandler: cocoa.classes.MSInsertSymbolEventHandler;
