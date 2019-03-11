/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHideAllGridsAndLayoutsAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    hideAllGridsAndLayouts<R = void, P0 = unknown>(_hideAllGridsAndLayouts: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSHideAllGridsAndLayoutsAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSHideAllGridsAndLayoutsAction>(): R;
      new: <R = MSHideAllGridsAndLayoutsAction>() => R;
    }
  }
}

declare const MSHideAllGridsAndLayoutsAction: cocoa.classes.MSHideAllGridsAndLayoutsAction;
