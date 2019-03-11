/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLayerEventHandler<T = any> extends cocoa.MSDragRectEventHandler {
    resizeLayer_toRect<R = void, P0 = unknown, P1 = cocoa.CGRect>(_resizeLayer: P0, _toRect: P1): R;
    insertNewLayerInCurrentGroup<R = void, P0 = unknown>(_insertNewLayerInCurrentGroup: P0): R;
    insertAsNewLayer<R = unknown, P0 = cocoa.CGRect>(_insertAsNewLayer: P0): R;
    pathForPrototypeLayer<R = unknown>(): R;
    setInsertionRect<R = void, P0 = cocoa.CGRect>(_setInsertionRect: P0): R;
    applicableActionItemIdentifier<R = unknown>(): R;
    insertedLayer<R = cocoa.MSLayer>(): R;
    setInsertedLayer<R = void, P0 = cocoa.MSLayer>(_v: P0): R;
    completionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    prototypeLayer<R = cocoa.MSLayer>(): R;
    setPrototypeLayer<R = void, P0 = cocoa.MSLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSInsertLayerEventHandler<T = any> extends cocoa.classes.MSDragRectEventHandler {
      alloc<R = MSInsertLayerEventHandler>(): R;
      new: <R = MSInsertLayerEventHandler>() => R;
    }
  }
}

declare const MSInsertLayerEventHandler: cocoa.classes.MSInsertLayerEventHandler;
