/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseSharedObjectAction<T = any> extends MSDocumentAction {
    performSharedObjectAction<R = void>(): R;
    validationStatus<R = number>(): R;
    hasDynamicTitle<R = boolean>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    updater<R = MSShareableObjectUpdater>(): R;
  }
  namespace classes {
    export interface MSBaseSharedObjectAction<T = any> extends MSDocumentAction {
      alloc<R = MSBaseSharedObjectAction>(): R;
      new: <R = MSBaseSharedObjectAction>() => R;
    }
  }
}

declare const MSBaseSharedObjectAction: cocoa.classes.MSBaseSharedObjectAction;
