/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditShapeInspectorViewController<T = any> extends cocoa.NSViewController, cocoa.MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    changeTool<R = void, P0 = unknown>(_changeTool: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    titleForRoundingPopUp<R = unknown>(): R;
    refreshRoundingPopUpTitle<R = void>(): R;
    roundingPopUpAction<R = void, P0 = unknown>(_roundingPopUpAction: P0): R;
    cornerRadiusAction<R = void, P0 = unknown>(_cornerRadiusAction: P0): R;
    refreshCornerRadiusButton<R = void>(): R;
    refreshCoordinates<R = void>(): R;
    vectorModeSegmentedButtonAction<R = void, P0 = unknown>(_vectorModeSegmentedButtonAction: P0): R;
    refreshCurveModeControls<R = void>(): R;
    finishEditingAction<R = void, P0 = unknown>(_finishEditingAction: P0): R;
    refreshClosePathButton<R = void>(): R;
    views<R = unknown>(): R;
    refresh<R = void>(): R;
    buttonItem<R = cocoa.MSShapeButtonInspectorItem>(): R;
    setButtonItem<R = void, P0 = cocoa.MSShapeButtonInspectorItem>(_v: P0): R;
    pointsController<R = cocoa.NSArrayController>(): R;
    setPointsController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    yAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setYAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    xAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setXAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    cornerRadiusSlider<R = cocoa.NSSlider>(): R;
    setCornerRadiusSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    curvePointYField<R = cocoa.MSUpDownTextField>(): R;
    setCurvePointYField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    curvePointXField<R = cocoa.MSUpDownTextField>(): R;
    setCurvePointXField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    closePathButton<R = cocoa.NSButton>(): R;
    setClosePathButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    makeRectSelectionButton<R = cocoa.NSButton>(): R;
    setMakeRectSelectionButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    curveModeBackgroundView<R = cocoa.NSView>(): R;
    setCurveModeBackgroundView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    roundingPopUpButton<R = cocoa.NSPopUpButton>(): R;
    setRoundingPopUpButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    cornerRadiusField<R = cocoa.NSTextField>(): R;
    setCornerRadiusField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    isMakingRectSelection<R = boolean>(): R;
    setIsMakingRectSelection<R = void, P0 = boolean>(_v: P0): R;
    shapeEventHandler<R = cocoa.MSShapeEventHandler>(): R;
    setShapeEventHandler<R = void, P0 = cocoa.MSShapeEventHandler>(_v: P0): R;
    pathController<R = cocoa.MSPathController>(): R;
    setPathController<R = void, P0 = cocoa.MSPathController>(_v: P0): R;
  }
  namespace classes {
    export interface MSEditShapeInspectorViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSInspectorChildControllerProtocol {
      alloc<R = MSEditShapeInspectorViewController>(): R;
      new: <R = MSEditShapeInspectorViewController>() => R;
    }
  }
}

declare const MSEditShapeInspectorViewController: cocoa.classes.MSEditShapeInspectorViewController;
