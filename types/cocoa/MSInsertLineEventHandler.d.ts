/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLineEventHandler<T = any> extends cocoa.MSEventHandler, cocoa.MSAlignmentEngineDelegateProtocol {
    lineThickness<R = number>(): R;
    style<R = unknown>(): R;
    addSnapTargetsToAlignmentEngine<R = void, P0 = unknown>(_addSnapTargetsToAlignmentEngine: P0): R;
    alignEndPoint_snap<R = unknown, P0 = cocoa.CGPoint, P1 = boolean>(_alignEndPoint: P0, _snap: P1): R;
    prepareAlignmentEngineForPoint_constraint<R = void, P0 = cocoa.CGPoint, P1 = unknown>(_prepareAlignmentEngineForPoint: P0, _constraint: P1): R;
    createShapeAtLocation<R = void, P0 = cocoa.CGPoint>(_createShapeAtLocation: P0): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    snapGuides<R = cocoa.MSAlignmentEngineResult>(): R;
    setSnapGuides<R = void, P0 = cocoa.MSAlignmentEngineResult>(_v: P0): R;
    alignmentEngine<R = cocoa.MSAlignmentEngine>(): R;
    lineShape<R = cocoa.MSShapePathLayer>(): R;
    setLineShape<R = void, P0 = cocoa.MSShapePathLayer>(_v: P0): R;
    lineShapeCreator<R = cocoa.CDUnknownBlockType>(): R;
    setLineShapeCreator<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInsertLineEventHandler<T = any> extends cocoa.classes.MSEventHandler, cocoa.classes.MSAlignmentEngineDelegateProtocol {
      alloc<R = MSInsertLineEventHandler>(): R;
      new: <R = MSInsertLineEventHandler>() => R;
    }
  }
}

declare const MSInsertLineEventHandler: cocoa.classes.MSInsertLineEventHandler;
