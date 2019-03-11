/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeItem<T = any> extends cocoa.MSCustomShapeItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol {
    pointsAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setPointsAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    radiusAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setRadiusAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    pointsField<R = cocoa.MSUpDownTextField>(): R;
    setPointsField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    radiusField<R = cocoa.MSUpDownTextField>(): R;
    setRadiusField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    layersController<R = cocoa.NSArrayController>(): R;
    setLayersController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStarShapeItem<T = any> extends cocoa.classes.MSCustomShapeItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSStarShapeItem>(): R;
      new: <R = MSStarShapeItem>() => R;
    }
  }
}

declare const MSStarShapeItem: cocoa.classes.MSStarShapeItem;
