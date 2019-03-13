/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    edit<R = void, P0 = unknown>(_edit: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSEditAction<T = any> extends MSDocumentAction {
      alloc<R = MSEditAction>(): R;
      new: <R = MSEditAction>() => R;
      editableLayerTraits<R = number>(): R;
    }
  }
}

declare const MSEditAction: cocoa.classes.MSEditAction;
