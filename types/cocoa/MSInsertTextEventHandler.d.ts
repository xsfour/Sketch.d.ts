/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertTextEventHandler<T = any> extends MSEventHandler {
    rectForInsertingDirectly<R = CGRect, P0 = CGPoint>(_rectForInsertingDirectly: P0): R;
    selectTextLayerAndEdit<R = void, P0 = unknown>(_selectTextLayerAndEdit: P0): R;
    textLayerAtPoint_zoomValue<R = unknown, P0 = CGPoint, P1 = number>(_textLayerAtPoint: P0, _zoomValue: P1): R;
    tryToEditExistingTextLayer_zoomValue<R = boolean, P0 = CGPoint, P1 = number>(_tryToEditExistingTextLayer: P0, _zoomValue: P1): R;
    groupForInserting<R = unknown>(): R;
    textLayerWithRect_type<R = unknown, P0 = CGRect, P1 = number>(_textLayerWithRect: P0, _type: P1): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    textLayer<R = MSTextLayer>(): R;
    setTextLayer<R = void, P0 = MSTextLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSInsertTextEventHandler<T = any> extends MSEventHandler {
      alloc<R = MSInsertTextEventHandler>(): R;
      new: <R = MSInsertTextEventHandler>() => R;
    }
  }
}

declare const MSInsertTextEventHandler: cocoa.classes.MSInsertTextEventHandler;
