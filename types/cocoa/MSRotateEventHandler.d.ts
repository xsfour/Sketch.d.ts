/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotateEventHandler<T = any> extends cocoa.MSNormalBaseEventHandler, cocoa.MSAlignmentEngineDelegateProtocol, cocoa.NSTouchBarDelegateProtocol {
    rotationBarAction<R = void, P0 = unknown>(_rotationBarAction: P0): R;
    drawRotationCenterAtZoomScale<R = void, P0 = number>(_drawRotationCenterAtZoomScale: P0): R;
    alignDegreesTo15Angles<R = number, P0 = number>(_alignDegreesTo15Angles: P0): R;
    dragLayer<R = void, P0 = unknown>(_dragLayer: P0): R;
    dragCenterPoint<R = void, P0 = unknown>(_dragCenterPoint: P0): R;
    handleDrag<R = void, P0 = unknown>(_handleDrag: P0): R;
    handleRotation<R = void, P0 = unknown>(_handleRotation: P0): R;
    componentAtPoint<R = number, P0 = cocoa.CGPoint>(_componentAtPoint: P0): R;
    rotationCenterPointForAnchorPoint_layer<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_rotationCenterPointForAnchorPoint: P0, _layer: P1): R;
    setRotationCenterPoint_updateAnchorPoints<R = void, P0 = cocoa.CGPoint, P1 = boolean>(_setRotationCenterPoint: P0, _updateAnchorPoints: P1): R;
    resetWithSelection<R = void, P0 = unknown>(_resetWithSelection: P0): R;
    centerPointSnaps<R = cocoa.MSAlignmentEngineResult>(): R;
    setCenterPointSnaps<R = void, P0 = cocoa.MSAlignmentEngineResult>(_v: P0): R;
    draggedComponent<R = number>(): R;
    setDraggedComponent<R = void, P0 = number>(_v: P0): R;
    dragRotationInterpreter<R = cocoa.MSRotationGestureInterpreter>(): R;
    cursorRotationInterpreter<R = cocoa.MSRotationGestureInterpreter>(): R;
    dragGestureRecognizer<R = cocoa.MSDragToMoveOrCopyGestureRecognizer>(): R;
    rotationItems<R = cocoa.NSArray>(): R;
    rotationCenterPoint<R = cocoa.CGPoint>(): R;
    setRotationCenterPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    disableMoving<R = boolean>(): R;
    setDisableMoving<R = void, P0 = boolean>(_v: P0): R;
    exitOnMouseUp<R = boolean>(): R;
    setExitOnMouseUp<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSRotateEventHandler<T = any> extends cocoa.classes.MSNormalBaseEventHandler, cocoa.classes.MSAlignmentEngineDelegateProtocol, cocoa.classes.NSTouchBarDelegateProtocol {
      alloc<R = MSRotateEventHandler>(): R;
      new: <R = MSRotateEventHandler>() => R;
      cursorForDegrees<R = unknown, P0 = number>(_cursorForDegrees: P0): R;
    }
  }
}

declare const MSRotateEventHandler: cocoa.classes.MSRotateEventHandler;
