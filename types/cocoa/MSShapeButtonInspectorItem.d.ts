/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeButtonInspectorItem<T = any> extends cocoa.MSInspectorItem {
    finishEditingAction<R = void, P0 = unknown>(_finishEditingAction: P0): R;
    closePathAction<R = void, P0 = unknown>(_closePathAction: P0): R;
    closePathButton<R = cocoa.NSButton>(): R;
    setClosePathButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    pathController<R = cocoa.MSPathController>(): R;
    setPathController<R = void, P0 = cocoa.MSPathController>(_v: P0): R;
    shapeEventHandler<R = cocoa.MSShapeEventHandler>(): R;
    setShapeEventHandler<R = void, P0 = cocoa.MSShapeEventHandler>(_v: P0): R;
  }
  namespace classes {
    export interface MSShapeButtonInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSShapeButtonInspectorItem>(): R;
      new: <R = MSShapeButtonInspectorItem>() => R;
    }
  }
}

declare const MSShapeButtonInspectorItem: cocoa.classes.MSShapeButtonInspectorItem;
