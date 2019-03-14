/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCoordinateInspectorValueAdaptor<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
    initWithLayerController_valueGetter_valueSetter_layerKeyPathsToWatch_axis<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType, P3 = unknown, P4 = number>(_initWithLayerController: P0, _valueGetter: P1, _valueSetter: P2, _layerKeyPathsToWatch: P3, _axis: P4): R;
    initWithLayerController_layerKeyPath_axis<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithLayerController: P0, _layerKeyPath: P1, _axis: P2): R;
    axis<R = number>(): R;
    setAxis<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSCoordinateInspectorValueAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMathInspectorValueAdaptor {
      alloc<R = MSCoordinateInspectorValueAdaptor>(): R;
      new: <R = MSCoordinateInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSCoordinateInspectorValueAdaptor: cocoa.MSCoordinateInspectorValueAdaptor.CLASS;
