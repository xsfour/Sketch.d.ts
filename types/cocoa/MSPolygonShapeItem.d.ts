/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeItem<T = any> extends cocoa.MSCustomShapeItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol {
    sidesField<R = cocoa.MSUpDownTextField>(): R;
    setSidesField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    layersController<R = cocoa.NSArrayController>(): R;
    setLayersController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    sidesAdaptor<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setSidesAdaptor<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPolygonShapeItem<T = any> extends cocoa.classes.MSCustomShapeItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSPolygonShapeItem>(): R;
      new: <R = MSPolygonShapeItem>() => R;
    }
  }
}

declare const MSPolygonShapeItem: cocoa.classes.MSPolygonShapeItem;
