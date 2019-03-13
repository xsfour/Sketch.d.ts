/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenSelectionAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    flattenSelection<R = void, P0 = unknown>(_flattenSelection: P0): R;
  }
  namespace classes {
    export interface MSFlattenSelectionAction<T = any> extends MSDocumentAction {
      alloc<R = MSFlattenSelectionAction>(): R;
      new: <R = MSFlattenSelectionAction>() => R;
    }
  }
}

declare const MSFlattenSelectionAction: cocoa.classes.MSFlattenSelectionAction;
