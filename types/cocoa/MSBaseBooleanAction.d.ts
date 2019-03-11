/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseBooleanAction<T = any> extends cocoa.MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    booleanOperation<R = number>(): R;
    hasShapePartsSelected<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBaseBooleanAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSBaseBooleanAction>(): R;
      new: <R = MSBaseBooleanAction>() => R;
    }
  }
}

declare const MSBaseBooleanAction: cocoa.classes.MSBaseBooleanAction;
