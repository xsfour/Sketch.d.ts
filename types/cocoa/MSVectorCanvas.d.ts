/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorCanvas<T = any> extends cocoa.NSObject, cocoa.MSSelectVectorHandleGestureRecognizerDelegateProtocol, cocoa.MSAlignmentEngineDelegateProtocol {
    cxx_destruct<R = void>(): R;
    setNeedsUpdateCursor<R = void>(): R;
    updateCursor<R = void>(): R;
    trackMouse<R = void, P0 = unknown>(_trackMouse: P0): R;
    clickToEndEditing<R = void, P0 = unknown>(_clickToEndEditing: P0): R;
    dragSegment<R = void, P0 = unknown>(_dragSegment: P0): R;
    prepareToDragSegmentWithMouseLocation_modiferFlags<R = void, P0 = cocoa.CGPoint, P1 = number>(_prepareToDragSegmentWithMouseLocation: P0, _modiferFlags: P1): R;
    locationForAddingPoint_modifierFlags<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_locationForAddingPoint: P0, _modifierFlags: P1): R;
    insertPointWithModifierFlags<R = unknown, P0 = number>(_insertPointWithModifierFlags: P0): R;
    selectHandle<R = void, P0 = unknown>(_selectHandle: P0): R;
    moveCurveAdjustmentHandleToPoint_didChangeCurveMode<R = void, P0 = cocoa.CGPoint, P1 = string>(_moveCurveAdjustmentHandleToPoint: P0, _didChangeCurveMode: P1): R;
    toggleCurveModeOfPointAtIndexPath_modifierFlags<R = void, P0 = unknown, P1 = number>(_toggleCurveModeOfPointAtIndexPath: P0, _modifierFlags: P1): R;
    determineLocationAndSnappingOfDrag<R = cocoa.CGPoint, P0 = unknown>(_determineLocationAndSnappingOfDrag: P0): R;
    dragHandle<R = void, P0 = unknown>(_dragHandle: P0): R;
    flagsChanged<R = void, P0 = unknown>(_flagsChanged: P0): R;
    dragToSelect<R = void, P0 = unknown>(_dragToSelect: P0): R;
    clickToSelect<R = void, P0 = unknown>(_clickToSelect: P0): R;
    mouseUpAtPoint<R = void, P0 = cocoa.CGPoint>(_mouseUpAtPoint: P0): R;
    segmentAtIndexPath<R = unknown, P0 = unknown>(_segmentAtIndexPath: P0): R;
    doubleMouseDownAtPoint_modifierFlags<R = void, P0 = cocoa.CGPoint, P1 = number>(_doubleMouseDownAtPoint: P0, _modifierFlags: P1): R;
    singleMouseDownAtPoint_modifierFlags<R = void, P0 = cocoa.CGPoint, P1 = number>(_singleMouseDownAtPoint: P0, _modifierFlags: P1): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
    adjustHandle_toValue_onAxis<R = void, P0 = unknown, P1 = number, P2 = number>(_adjustHandle: P0, _toValue: P1, _onAxis: P2): R;
    adjustHandlesToValue_onAxis<R = void, P0 = number, P1 = number>(_adjustHandlesToValue: P0, _onAxis: P1): R;
    distributeVectorPointsToAxis<R = void, P0 = number>(_distributeVectorPointsToAxis: P0): R;
    alignVectorPointsToKey<R = void, P0 = unknown>(_alignVectorPointsToKey: P0): R;
    changeToCurveMode<R = void, P0 = number>(_changeToCurveMode: P0): R;
    indexPathsForHandlesInRect<R = unknown, P0 = cocoa.CGRect>(_indexPathsForHandlesInRect: P0): R;
    indexPathOfSegmentAtPoint<R = unknown, P0 = cocoa.CGPoint>(_indexPathOfSegmentAtPoint: P0): R;
    indexPathOfHandleAtPoint<R = unknown, P0 = cocoa.CGPoint>(_indexPathOfHandleAtPoint: P0): R;
    overlayDrawingRectForLayer<R = cocoa.CGRect, P0 = unknown>(_overlayDrawingRectForLayer: P0): R;
    setOverlayNeedsDisplay<R = void>(): R;
    convertPointToView_fromPathCoordinatesOfShape<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPointToView: P0, _fromPathCoordinatesOfShape: P1): R;
    drawHandles<R = void>(): R;
    drawingRectForInsertionAtPoint<R = cocoa.CGRect, P0 = cocoa.CGPoint>(_drawingRectForInsertionAtPoint: P0): R;
    drawInsertionPoint<R = void>(): R;
    drawHighlightedSegment<R = void>(): R;
    drawSnaps<R = void>(): R;
    drawWire<R = void>(): R;
    drawHairline<R = void>(): R;
    makeWireBezierPathForClosingPath_indexPathForSelectedHandle<R = unknown, P0 = boolean, P1 = unknown>(_makeWireBezierPathForClosingPath: P0, _indexPathForSelectedHandle: P1): R;
    updateWire<R = void>(): R;
    addOtherLayersToSnapper<R = void, P0 = unknown>(_addOtherLayersToSnapper: P0): R;
    includePointForSnapping_inPathLayer<R = void, P0 = cocoa.CGPoint, P1 = unknown>(_includePointForSnapping: P0, _inPathLayer: P1): R;
    addHandlesToSnapperForDragging<R = void, P0 = boolean>(_addHandlesToSnapperForDragging: P0): R;
    addTargetsToSnapperForDragging<R = void, P0 = boolean>(_addTargetsToSnapperForDragging: P0): R;
    prepareSnapper<R = void>(): R;
    changeContext<R = unknown>(): R;
    toggleSelectionOfHandleAtIndexPath_notifyDelegate<R = void, P0 = unknown, P1 = boolean>(_toggleSelectionOfHandleAtIndexPath: P0, _notifyDelegate: P1): R;
    didChangeSelection<R = void>(): R;
    deselectHandleAtIndexPath<R = void, P0 = unknown>(_deselectHandleAtIndexPath: P0): R;
    selectHandlesAtIndexPaths_notifyDelegate<R = void, P0 = unknown, P1 = boolean>(_selectHandlesAtIndexPaths: P0, _notifyDelegate: P1): R;
    selectHandlesAtIndexPaths<R = void, P0 = unknown>(_selectHandlesAtIndexPaths: P0): R;
    selectHandleAtIndexPath_extendSelection_notifyDelegate<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(_selectHandleAtIndexPath: P0, _extendSelection: P1, _notifyDelegate: P2): R;
    selectHandleAtIndexPath_extendSelection<R = void, P0 = unknown, P1 = boolean>(_selectHandleAtIndexPath: P0, _extendSelection: P1): R;
    didChangeAllowSelectionOnly<R = void>(): R;
    updateToolStateWithMouseLocation_modifierFlags<R = void, P0 = cocoa.CGPoint, P1 = number>(_updateToolStateWithMouseLocation: P0, _modifierFlags: P1): R;
    setVectorTool_indexPath_insertionPoint<R = void, P0 = number, P1 = unknown, P2 = cocoa.CGPoint>(_setVectorTool: P0, _indexPath: P1, _insertionPoint: P2): R;
    selectLayers_extendSelection<R = void, P0 = unknown, P1 = boolean>(_selectLayers: P0, _extendSelection: P1): R;
    pathLayersForLayer<R = unknown, P0 = unknown>(_pathLayersForLayer: P0): R;
    rebuildVisibleLayersMaintainingSelection<R = void, P0 = boolean>(_rebuildVisibleLayersMaintainingSelection: P0): R;
    setVisibleLayers<R = void, P0 = unknown>(_setVisibleLayers: P0): R;
    registerWithEventHandler<R = void, P0 = unknown>(_registerWithEventHandler: P0): R;
    handleStateDecider<R = cocoa.MSVectorHandleStateDecider>(): R;
    wireBezierPath<R = cocoa.NSBezierPath>(): R;
    setWireBezierPath<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    shapeCenterSnapTargets<R = cocoa.NSArray>(): R;
    setShapeCenterSnapTargets<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    snapper<R = cocoa.MSAlignmentEngine>(): R;
    setSnapper<R = void, P0 = cocoa.MSAlignmentEngine>(_v: P0): R;
    activeHandleBehavior<R = number>(): R;
    setActiveHandleBehavior<R = void, P0 = number>(_v: P0): R;
    insertionPoint<R = cocoa.CGPoint>(): R;
    activeIndexPath<R = cocoa.NSIndexPath>(): R;
    vectorTool<R = number>(): R;
    clickToEndEditingGestureRecognizer<R = cocoa.MSClickGestureRecognizer>(): R;
    dragSegmentGestureRecognizer<R = cocoa.MSDragSegmentGestureRecognizer>(): R;
    dragHandleGestureRecognizer<R = cocoa.MSDragHandleGestureRecognizer>(): R;
    clickToSelectGestureRecognizer<R = cocoa.MSSelectVectorHandleGestureRecognizer>(): R;
    dragToSelectGestureRecognizer<R = cocoa.MSDragToSelectGestureRecognizer>(): R;
    delegate<R = cocoa.MSVectorCanvasDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSVectorCanvasDelegate>(_v: P0): R;
    snaps<R = cocoa.MSAlignmentEngineResult>(): R;
    setSnaps<R = void, P0 = cocoa.MSAlignmentEngineResult>(_v: P0): R;
    editingBehavior<R = cocoa.MSShapeEditingBehavior>(): R;
    setEditingBehavior<R = void, P0 = cocoa.MSShapeEditingBehavior>(_v: P0): R;
    visibleLayers<R = cocoa.NSArray>(): R;
    selectedLayers<R = cocoa.NSArray>(): R;
    setSelectedLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    pathController<R = cocoa.MSPathController>(): R;
    setPathController<R = void, P0 = cocoa.MSPathController>(_v: P0): R;
    view<R = cocoa.MSContentDrawView>(): R;
    setView<R = void, P0 = cocoa.MSContentDrawView>(_v: P0): R;
    eventHandler<R = cocoa.MSShapeEventHandler>(): R;
    setEventHandler<R = void, P0 = cocoa.MSShapeEventHandler>(_v: P0): R;
    interactivelySelecting<R = boolean>(): R;
    indexPathForHighlightedComponent<R = cocoa.NSIndexPath>(): R;
    indexPathsForSelectedHandles<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSVectorCanvas<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSSelectVectorHandleGestureRecognizerDelegateProtocol, cocoa.classes.MSAlignmentEngineDelegateProtocol {
      alloc<R = MSVectorCanvas>(): R;
      new: <R = MSVectorCanvas>() => R;
    }
  }
}

declare const MSVectorCanvas: cocoa.classes.MSVectorCanvas;
