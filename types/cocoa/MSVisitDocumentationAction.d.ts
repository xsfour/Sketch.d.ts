/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVisitDocumentationAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    visitDocumentation<R = void, P0 = unknown>(_visitDocumentation: P0): R;
  }
  namespace classes {
    export interface MSVisitDocumentationAction<T = any> extends MSAction {
      alloc<R = MSVisitDocumentationAction>(): R;
      new: <R = MSVisitDocumentationAction>() => R;
    }
  }
}

declare const MSVisitDocumentationAction: cocoa.classes.MSVisitDocumentationAction;
