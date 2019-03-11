/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    rulerHeight<R = number>(): R;
    rulerLength<R = number>(): R;
    zoomValue<R = number>(): R;
    scrollOrigin<R = cocoa.CGPoint>(): R;
    occupiedRegionForRect_withOffset_zoom<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = number>(_occupiedRegionForRect: P0, _withOffset: P1, _zoom: P2): R;
    bezierPathForLineAtPosition_inRect<R = unknown, P0 = number, P1 = cocoa.CGRect>(_bezierPathForLineAtPosition: P0, _inRect: P1): R;
    drawGuide_onCanvasInRect<R = void, P0 = number, P1 = cocoa.CGRect>(_drawGuide: P0, _onCanvasInRect: P1): R;
    drawGuidesOnCanvasInRect<R = void, P0 = cocoa.CGRect>(_drawGuidesOnCanvasInRect: P0): R;
    setHidden<R = void, P0 = boolean>(_setHidden: P0): R;
    baseLineIncludingScrollOrigin<R = number, P0 = boolean>(_baseLineIncludingScrollOrigin: P0): R;
    baseLine<R = number>(): R;
    mouseEventToPoint<R = cocoa.CGPoint, P0 = unknown>(_mouseEventToPoint: P0): R;
    refreshGuidesForGrid<R = void, P0 = unknown>(_refreshGuidesForGrid: P0): R;
    refreshAllGuidesInDrawView<R = void>(): R;
    refreshGuideInDrawViewAtPosition<R = void, P0 = number>(_refreshGuideInDrawViewAtPosition: P0): R;
    refreshGuideInDrawViewAtIndex<R = void, P0 = number>(_refreshGuideInDrawViewAtIndex: P0): R;
    turnAlignmentGuidesBackOn<R = void>(): R;
    rulerBasedRectForLayer<R = cocoa.CGRect, P0 = unknown>(_rulerBasedRectForLayer: P0): R;
    snapGuideToSelectedLayers<R = number, P0 = number>(_snapGuideToSelectedLayers: P0): R;
    guidePositionForMouse<R = number, P0 = cocoa.CGPoint>(_guidePositionForMouse: P0): R;
    setDragCursor<R = void>(): R;
    setResizeCursor<R = void>(): R;
    updateCursorForDragingGuideToPoint<R = void, P0 = cocoa.CGPoint>(_updateCursorForDragingGuideToPoint: P0): R;
    dragSelectedGuideWithMouse<R = void, P0 = cocoa.CGPoint>(_dragSelectedGuideWithMouse: P0): R;
    updateSelectedLayerOriginsInInspector<R = void>(): R;
    distanceFromDragOrigin<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_distanceFromDragOrigin: P0): R;
    dragRulerBaseWithMouse_modifierFlags<R = void, P0 = cocoa.CGPoint, P1 = number>(_dragRulerBaseWithMouse: P0, _modifierFlags: P1): R;
    indexOfGuideAtMousePoint<R = number, P0 = cocoa.CGPoint>(_indexOfGuideAtMousePoint: P0): R;
    addNewGuideAtMousePoint<R = void, P0 = cocoa.CGPoint>(_addNewGuideAtMousePoint: P0): R;
    otherAxisForPoint<R = number, P0 = cocoa.CGPoint>(_otherAxisForPoint: P0): R;
    relevantAxisForPoint<R = number, P0 = cocoa.CGPoint>(_relevantAxisForPoint: P0): R;
    refreshGuide<R = void, P0 = number>(_refreshGuide: P0): R;
    refreshTemporaryRulerGuide<R = void>(): R;
    isEventInView<R = boolean, P0 = unknown>(_isEventInView: P0): R;
    removeAllGuides<R = void, P0 = unknown>(_removeAllGuides: P0): R;
    removeGuide<R = void, P0 = unknown>(_removeGuide: P0): R;
    addAction_toMenu<R = void, P0 = unknown, P1 = unknown>(_addAction: P0, _toMenu: P1): R;
    titleForRemoveAllGuidesMenuItem<R = unknown>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    guides<R = unknown>(): R;
    occupiedRegion<R = cocoa.CGRect>(): R;
    prepareRulerViewLayer<R = void, P0 = cocoa.CGRect>(_prepareRulerViewLayer: P0): R;
    rulerViewLayerClass<R = unknown>(): R;
    makeRulerViewLayer<R = unknown>(): R;
    calculateContentsScale<R = void>(): R;
    awakeFromNib<R = void>(): R;
    rulerViewLayer<R = cocoa.MSRulerViewLayer>(): R;
    setRulerViewLayer<R = void, P0 = cocoa.MSRulerViewLayer>(_v: P0): R;
    temporaryRulerGuide<R = number>(): R;
    setTemporaryRulerGuide<R = void, P0 = number>(_v: P0): R;
    axis<R = number>(): R;
    setAxis<R = void, P0 = number>(_v: P0): R;
    mouseDownPoint<R = cocoa.CGPoint>(): R;
    setMouseDownPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    mouseDidDrag<R = boolean>(): R;
    setMouseDidDrag<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = cocoa.MSContentDrawView>(): R;
    setContentView<R = void, P0 = cocoa.MSContentDrawView>(_v: P0): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    rulerData<R = cocoa.MSRulerData>(): R;
    setRulerData<R = void, P0 = cocoa.MSRulerData>(_v: P0): R;
  }
  namespace classes {
    export interface MSRulerView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSRulerView>(): R;
      new: <R = MSRulerView>() => R;
      rulerDraggingLocked<R = boolean>(): R;
      setRulerDraggingLocked<R = void, P0 = boolean>(_setRulerDraggingLocked: P0): R;
    }
  }
}

declare const MSRulerView: cocoa.classes.MSRulerView;
