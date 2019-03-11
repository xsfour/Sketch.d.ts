/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertTextEventHandler<T = any> extends cocoa.MSEventHandler {
    rectForInsertingDirectly<R = cocoa.CGRect, P0 = cocoa.CGPoint>(_rectForInsertingDirectly: P0): R;
    selectTextLayerAndEdit<R = void, P0 = unknown>(_selectTextLayerAndEdit: P0): R;
    textLayerAtPoint_zoomValue<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_textLayerAtPoint: P0, _zoomValue: P1): R;
    tryToEditExistingTextLayer_zoomValue<R = boolean, P0 = cocoa.CGPoint, P1 = number>(_tryToEditExistingTextLayer: P0, _zoomValue: P1): R;
    groupForInserting<R = unknown>(): R;
    textLayerWithRect_type<R = unknown, P0 = cocoa.CGRect, P1 = number>(_textLayerWithRect: P0, _type: P1): R;
    completionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    textLayer<R = cocoa.MSTextLayer>(): R;
    setTextLayer<R = void, P0 = cocoa.MSTextLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSInsertTextEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSInsertTextEventHandler>(): R;
      new: <R = MSInsertTextEventHandler>() => R;
    }
  }
}

declare const MSInsertTextEventHandler: cocoa.classes.MSInsertTextEventHandler;
