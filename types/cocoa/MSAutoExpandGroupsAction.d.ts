/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoExpandGroupsAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    autoExpandGroups<R = void, P0 = unknown>(_autoExpandGroups: P0): R;
  }
  namespace classes {
    export interface MSAutoExpandGroupsAction<T = any> extends MSDocumentAction {
      alloc<R = MSAutoExpandGroupsAction>(): R;
      new: <R = MSAutoExpandGroupsAction>() => R;
    }
  }
}

declare const MSAutoExpandGroupsAction: cocoa.classes.MSAutoExpandGroupsAction;
