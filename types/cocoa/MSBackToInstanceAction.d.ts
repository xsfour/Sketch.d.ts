/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackToInstanceAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    backToInstance<R = void, P0 = unknown>(_backToInstance: P0): R;
  }
  namespace classes {
    export interface MSBackToInstanceAction<T = any> extends MSDocumentAction {
      alloc<R = MSBackToInstanceAction>(): R;
      new: <R = MSBackToInstanceAction>() => R;
    }
  }
}

declare const MSBackToInstanceAction: cocoa.classes.MSBackToInstanceAction;
