/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertHotspotEventHandler<T = any> extends MSInsertLayerEventHandler {
    cursorForInsertingFromExisting<R = unknown>(): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface MSInsertHotspotEventHandler<T = any> extends MSInsertLayerEventHandler {
      alloc<R = MSInsertHotspotEventHandler>(): R;
      new: <R = MSInsertHotspotEventHandler>() => R;
    }
  }
}

declare const MSInsertHotspotEventHandler: cocoa.classes.MSInsertHotspotEventHandler;
