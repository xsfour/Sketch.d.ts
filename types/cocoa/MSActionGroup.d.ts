/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSActionGroup<T = any> extends MSDocumentAction {
    supportsState<R = boolean>(): R;
    actionNames<R = unknown>(): R;
    childActions<R = unknown>(): R;
  }
  namespace classes {
    export interface MSActionGroup<T = any> extends MSDocumentAction {
      alloc<R = MSActionGroup>(): R;
      new: <R = MSActionGroup>() => R;
    }
  }
}

declare const MSActionGroup: cocoa.classes.MSActionGroup;
