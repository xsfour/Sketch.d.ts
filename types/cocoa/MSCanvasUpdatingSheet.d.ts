/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCanvasUpdatingSheet<T = any> extends CHSheetController {
    doc<R = unknown>(): R;
    restoreState<R = void>(): R;
    storeState<R = void>(): R;
    historyMomentTitle<R = unknown>(): R;
    doPerformOperation<R = void>(): R;
    performOperation<R = void>(): R;
    triggerPerformOperation<R = void>(): R;
    schedulePerformOperation<R = void>(): R;
    selectedLayerIDs<R = NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = NSSet>(_v: P0): R;
    selectedPageID<R = NSString>(): R;
    setSelectedPageID<R = void, P0 = NSString>(_v: P0): R;
    operationTimer<R = NSTimer>(): R;
    setOperationTimer<R = void, P0 = NSTimer>(_v: P0): R;
    oldDocumentState<R = MSImmutableDocumentData>(): R;
    setOldDocumentState<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
  }
  namespace classes {
    export interface MSCanvasUpdatingSheet<T = any> extends CHSheetController {
      alloc<R = MSCanvasUpdatingSheet>(): R;
      new: <R = MSCanvasUpdatingSheet>() => R;
    }
  }
}

declare const MSCanvasUpdatingSheet: cocoa.classes.MSCanvasUpdatingSheet;
