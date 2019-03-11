/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorChildControllerProtocol<T = any> {
    refreshIfNecessary<R = void, P0 = cocoa.MSTreeDiff>(_refreshIfNecessary: P0): R;
    selectionDidChangeTo<R = void, P0 = cocoa.NSArray>(_selectionDidChangeTo: P0): R;
    prepareForDisplay<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
  }
  namespace classes {
    export interface MSInspectorChildControllerProtocol<T = any> {  }
  }
}

declare const MSInspectorChildControllerProtocol: cocoa.classes.MSInspectorChildControllerProtocol;
