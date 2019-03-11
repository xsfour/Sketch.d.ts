/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCustomShapeItem<T = any> extends cocoa.MSInspectorItem {
    refreshAndResetAction<R = void, P0 = unknown>(_refreshAndResetAction: P0): R;
  }
  namespace classes {
    export interface MSCustomShapeItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSCustomShapeItem>(): R;
      new: <R = MSCustomShapeItem>() => R;
    }
  }
}

declare const MSCustomShapeItem: cocoa.classes.MSCustomShapeItem;
