/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineEndpointInspectorItem<T = any> extends cocoa.MSTwoTextFieldInspectorItem {
    initWithTitle_field1Label_field2Label_xPath_yPath<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithTitle: P0, _field1Label: P1, _field2Label: P2, _xPath: P3, _yPath: P4): R;
    yAdaptor<R = cocoa.MSCoordinateInspectorValueAdaptor>(): R;
    setYAdaptor<R = void, P0 = cocoa.MSCoordinateInspectorValueAdaptor>(_v: P0): R;
    xAdaptor<R = cocoa.MSCoordinateInspectorValueAdaptor>(): R;
    setXAdaptor<R = void, P0 = cocoa.MSCoordinateInspectorValueAdaptor>(_v: P0): R;
  }
  namespace classes {
    export interface MSLineEndpointInspectorItem<T = any> extends cocoa.classes.MSTwoTextFieldInspectorItem {
      alloc<R = MSLineEndpointInspectorItem>(): R;
      new: <R = MSLineEndpointInspectorItem>() => R;
    }
  }
}

declare const MSLineEndpointInspectorItem: cocoa.classes.MSLineEndpointInspectorItem;
