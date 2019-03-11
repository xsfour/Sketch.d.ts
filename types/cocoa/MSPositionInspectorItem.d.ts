/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPositionInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol {
    allowFloatValues<R = boolean>(): R;
    rotationAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setRotationAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    yAdaptor<R = cocoa.MSCoordinateInspectorValueAdaptor>(): R;
    setYAdaptor<R = void, P0 = cocoa.MSCoordinateInspectorValueAdaptor>(_v: P0): R;
    xAdaptor<R = cocoa.MSCoordinateInspectorValueAdaptor>(): R;
    setXAdaptor<R = void, P0 = cocoa.MSCoordinateInspectorValueAdaptor>(_v: P0): R;
    xField<R = cocoa.MSInlineUpDownTextField>(): R;
    setXField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    rotationField<R = cocoa.MSInlineUpDownTextField>(): R;
    setRotationField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    yField<R = cocoa.MSInlineUpDownTextField>(): R;
    setYField<R = void, P0 = cocoa.MSInlineUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPositionInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol {
      alloc<R = MSPositionInspectorItem>(): R;
      new: <R = MSPositionInspectorItem>() => R;
    }
  }
}

declare const MSPositionInspectorItem: cocoa.classes.MSPositionInspectorItem;
