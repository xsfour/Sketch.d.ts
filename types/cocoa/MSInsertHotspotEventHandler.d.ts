/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertHotspotEventHandler<T = any> extends cocoa.MSInsertLayerEventHandler {
    cursorForInsertingFromExisting<R = unknown>(): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface MSInsertHotspotEventHandler<T = any> extends cocoa.classes.MSInsertLayerEventHandler {
      alloc<R = MSInsertHotspotEventHandler>(): R;
      new: <R = MSInsertHotspotEventHandler>() => R;
    }
  }
}

declare const MSInsertHotspotEventHandler: cocoa.classes.MSInsertHotspotEventHandler;
