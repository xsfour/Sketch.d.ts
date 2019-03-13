/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSizeInspectorValueAdaptor<T = any> extends MSCoordinateInspectorValueAdaptor {
    anchorFromSuffix_axis<R = number, P0 = number, P1 = number>(_anchorFromSuffix: P0, _axis: P1): R;
  }
  namespace classes {
    export interface MSSizeInspectorValueAdaptor<T = any> extends MSCoordinateInspectorValueAdaptor {
      alloc<R = MSSizeInspectorValueAdaptor>(): R;
      new: <R = MSSizeInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSSizeInspectorValueAdaptor: cocoa.classes.MSSizeInspectorValueAdaptor;
