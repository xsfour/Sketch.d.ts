/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeItem<T = any> extends cocoa.MSCustomShapeItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol, cocoa.MSLayerChangeObserverProtocol {
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    sliderAction<R = void, P0 = unknown>(_sliderAction: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    curvaturePopup<R = cocoa.NSPopUpButton>(): R;
    setCurvaturePopup<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    radiusAdaptor<R = cocoa.MSCornerRadiusInspectorValueAdaptor>(): R;
    setRadiusAdaptor<R = void, P0 = cocoa.MSCornerRadiusInspectorValueAdaptor>(_v: P0): R;
    radiusSlider<R = cocoa.NSSlider>(): R;
    setRadiusSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    radiusField<R = cocoa.MSInlineUpDownTextField>(): R;
    setRadiusField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSRectangleShapeItem<T = any> extends cocoa.classes.MSCustomShapeItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol, cocoa.classes.MSLayerChangeObserverProtocol {
      alloc<R = MSRectangleShapeItem>(): R;
      new: <R = MSRectangleShapeItem>() => R;
    }
  }
}

declare const MSRectangleShapeItem: cocoa.classes.MSRectangleShapeItem;
