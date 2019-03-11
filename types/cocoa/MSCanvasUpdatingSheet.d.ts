/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCanvasUpdatingSheet<T = any> extends cocoa.CHSheetController {
    doc<R = unknown>(): R;
    restoreState<R = void>(): R;
    storeState<R = void>(): R;
    historyMomentTitle<R = unknown>(): R;
    doPerformOperation<R = void>(): R;
    performOperation<R = void>(): R;
    triggerPerformOperation<R = void>(): R;
    schedulePerformOperation<R = void>(): R;
    selectedLayerIDs<R = cocoa.NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    selectedPageID<R = cocoa.NSString>(): R;
    setSelectedPageID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    operationTimer<R = cocoa.NSTimer>(): R;
    setOperationTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    oldDocumentState<R = cocoa.MSImmutableDocumentData>(): R;
    setOldDocumentState<R = void, P0 = cocoa.MSImmutableDocumentData>(_v: P0): R;
  }
  namespace classes {
    export interface MSCanvasUpdatingSheet<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSCanvasUpdatingSheet>(): R;
      new: <R = MSCanvasUpdatingSheet>() => R;
    }
  }
}

declare const MSCanvasUpdatingSheet: cocoa.classes.MSCanvasUpdatingSheet;
