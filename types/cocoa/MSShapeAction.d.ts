/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeAction<T = any> extends MSDocumentAction {
    imageForToolbar<R = unknown>(): R;
    hasSubMenu<R = boolean>(): R;
    tag<R = number>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSShapeAction<T = any> extends MSDocumentAction {
      alloc<R = MSShapeAction>(): R;
      new: <R = MSShapeAction>() => R;
    }
  }
}

declare const MSShapeAction: cocoa.classes.MSShapeAction;
