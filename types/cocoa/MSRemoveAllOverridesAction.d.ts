/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveAllOverridesAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    removeAllOverridesFromSelection<R = void, P0 = unknown>(_removeAllOverridesFromSelection: P0): R;
  }
  namespace classes {
    export interface MSRemoveAllOverridesAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSRemoveAllOverridesAction>(): R;
      new: <R = MSRemoveAllOverridesAction>() => R;
    }
  }
}

declare const MSRemoveAllOverridesAction: cocoa.classes.MSRemoveAllOverridesAction;
