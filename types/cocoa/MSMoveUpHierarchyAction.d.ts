/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveUpHierarchyAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    moveUpHierarchy<R = void, P0 = unknown>(_moveUpHierarchy: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSMoveUpHierarchyAction<T = any> extends MSDocumentAction {
      alloc<R = MSMoveUpHierarchyAction>(): R;
      new: <R = MSMoveUpHierarchyAction>() => R;
    }
  }
}

declare const MSMoveUpHierarchyAction: cocoa.classes.MSMoveUpHierarchyAction;
