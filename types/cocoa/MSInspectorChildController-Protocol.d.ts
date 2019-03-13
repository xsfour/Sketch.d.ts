/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorChildControllerProtocol<T = any> {
    refreshIfNecessary<R = void, P0 = MSTreeDiff>(_refreshIfNecessary: P0): R;
    selectionDidChangeTo<R = void, P0 = NSArray>(_selectionDidChangeTo: P0): R;
    prepareForDisplay<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
  }
  namespace classes {
    export interface MSInspectorChildControllerProtocol<T = any> {  }
  }
}
