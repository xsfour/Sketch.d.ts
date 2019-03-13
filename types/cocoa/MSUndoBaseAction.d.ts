/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUndoBaseAction<T = any> extends MSDocumentAction {
    isEditingTextLayerContents<R = boolean>(): R;
  }
  namespace classes {
    export interface MSUndoBaseAction<T = any> extends MSDocumentAction {
      alloc<R = MSUndoBaseAction>(): R;
      new: <R = MSUndoBaseAction>() => R;
    }
  }
}

declare const MSUndoBaseAction: cocoa.classes.MSUndoBaseAction;
