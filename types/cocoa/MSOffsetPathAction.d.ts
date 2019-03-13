/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOffsetPathAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    offsetPath<R = void, P0 = unknown>(_offsetPath: P0): R;
  }
  namespace classes {
    export interface MSOffsetPathAction<T = any> extends MSDocumentAction {
      alloc<R = MSOffsetPathAction>(): R;
      new: <R = MSOffsetPathAction>() => R;
    }
  }
}

declare const MSOffsetPathAction: cocoa.classes.MSOffsetPathAction;
