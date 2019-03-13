/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSliceEventHandler<T = any> extends MSInsertLayerEventHandler {
    cursorForInsertingFromExisting<R = unknown>(): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
    allSlices<R = NSArray>(): R;
    setAllSlices<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSInsertSliceEventHandler<T = any> extends MSInsertLayerEventHandler {
      alloc<R = MSInsertSliceEventHandler>(): R;
      new: <R = MSInsertSliceEventHandler>() => R;
    }
  }
}

declare const MSInsertSliceEventHandler: cocoa.classes.MSInsertSliceEventHandler;
