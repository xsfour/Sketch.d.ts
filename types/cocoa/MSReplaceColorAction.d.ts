/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    replaceColor<R = void, P0 = unknown>(_replaceColor: P0): R;
  }
  namespace classes {
    export interface MSReplaceColorAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSReplaceColorAction>(): R;
      new: <R = MSReplaceColorAction>() => R;
    }
  }
}

declare const MSReplaceColorAction: cocoa.classes.MSReplaceColorAction;
