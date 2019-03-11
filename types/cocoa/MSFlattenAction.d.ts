/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenAction<T = any> extends cocoa.MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    canFlattenSelection<R = boolean>(): R;
    flatten<R = void, P0 = unknown>(_flatten: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSFlattenAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSFlattenAction>(): R;
      new: <R = MSFlattenAction>() => R;
    }
  }
}

declare const MSFlattenAction: cocoa.classes.MSFlattenAction;
