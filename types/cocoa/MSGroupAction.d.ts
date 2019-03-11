/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGroupAction<T = any> extends cocoa.MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    group<R = void, P0 = unknown>(_group: P0): R;
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGroupAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSGroupAction>(): R;
      new: <R = MSGroupAction>() => R;
    }
  }
}

declare const MSGroupAction: cocoa.classes.MSGroupAction;
