/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragRectEventHandler<T = any> extends cocoa.MSEventHandler, cocoa.MSAlignmentEngineDelegateProtocol {
    addSnapTargetsToEngine<R = void, P0 = unknown>(_addSnapTargetsToEngine: P0): R;
    snapAndAlignPoint_modifierFlags<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_snapAndAlignPoint: P0, _modifierFlags: P1): R;
    drawRectPreview<R = void>(): R;
    performActionWithRect_fromLayer_constrainProportions<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = boolean>(_performActionWithRect: P0, _fromLayer: P1, _constrainProportions: P2): R;
    wantsLayerHighlight<R = boolean>(): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    drawingRectForInsertionRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_drawingRectForInsertionRect: P0): R;
    makeDiagonalTranslation<R = cocoa.CGVector, P0 = cocoa.CGVector>(_makeDiagonalTranslation: P0): R;
    calculateInsertionRect<R = cocoa.CGRect, P0 = unknown>(_calculateInsertionRect: P0): R;
    insertionCursor<R = cocoa.NSCursor>(): R;
    setInsertionCursor<R = void, P0 = cocoa.NSCursor>(_v: P0): R;
    snappingResult<R = cocoa.MSAlignmentEngineResult>(): R;
    setSnappingResult<R = void, P0 = cocoa.MSAlignmentEngineResult>(_v: P0): R;
    snapper<R = cocoa.MSAlignmentEngine>(): R;
    dragGestureRecognizer<R = cocoa.MSDragGestureRecognizer>(): R;
    insertionRect<R = cocoa.CGRect>(): R;
    setInsertionRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
    cursorForInsertingFromExisting<R = cocoa.NSCursor>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDragRectEventHandler<T = any> extends cocoa.classes.MSEventHandler, cocoa.classes.MSAlignmentEngineDelegateProtocol {
      alloc<R = MSDragRectEventHandler>(): R;
      new: <R = MSDragRectEventHandler>() => R;
    }
  }
}

declare const MSDragRectEventHandler: cocoa.classes.MSDragRectEventHandler;
