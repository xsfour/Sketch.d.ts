/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollapseAllGroupsAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    collapseAllGroups<R = void, P0 = unknown>(_collapseAllGroups: P0): R;
  }
  namespace classes {
    export interface MSCollapseAllGroupsAction<T = any> extends MSDocumentAction {
      alloc<R = MSCollapseAllGroupsAction>(): R;
      new: <R = MSCollapseAllGroupsAction>() => R;
    }
  }
}

declare const MSCollapseAllGroupsAction: cocoa.classes.MSCollapseAllGroupsAction;
