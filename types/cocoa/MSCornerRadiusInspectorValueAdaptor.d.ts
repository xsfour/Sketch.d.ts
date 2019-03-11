/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCornerRadiusInspectorValueAdaptor<T = any> extends cocoa.MSMathInspectorValueAdaptor {
    initWithModelsController<R = unknown, P0 = unknown>(_initWithModelsController: P0): R;
  }
  namespace classes {
    export interface MSCornerRadiusInspectorValueAdaptor<T = any> extends cocoa.classes.MSMathInspectorValueAdaptor {
      alloc<R = MSCornerRadiusInspectorValueAdaptor>(): R;
      new: <R = MSCornerRadiusInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSCornerRadiusInspectorValueAdaptor: cocoa.classes.MSCornerRadiusInspectorValueAdaptor;
