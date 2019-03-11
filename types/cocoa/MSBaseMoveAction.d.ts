/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveAction<T = any> extends cocoa.MSDocumentAction {
    ignoreNextKeyDownEventUntilModifiersChange<R = void>(): R;
    optionKeyPressed<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseMoveAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSBaseMoveAction>(): R;
      new: <R = MSBaseMoveAction>() => R;
    }
  }
}

declare const MSBaseMoveAction: cocoa.classes.MSBaseMoveAction;
