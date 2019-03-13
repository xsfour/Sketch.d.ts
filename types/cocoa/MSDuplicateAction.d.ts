/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDuplicateAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    duplicate<R = void, P0 = unknown>(_duplicate: P0): R;
  }
  namespace classes {
    export interface MSDuplicateAction<T = any> extends MSDocumentAction {
      alloc<R = MSDuplicateAction>(): R;
      new: <R = MSDuplicateAction>() => R;
    }
  }
}

declare const MSDuplicateAction: cocoa.classes.MSDuplicateAction;
