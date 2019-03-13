/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleStylePartAction<T = any> extends MSDocumentAction {
    toggleStylePartOfType<R = void, P0 = number>(_toggleStylePartOfType: P0): R;
  }
  namespace classes {
    export interface MSToggleStylePartAction<T = any> extends MSDocumentAction {
      alloc<R = MSToggleStylePartAction>(): R;
      new: <R = MSToggleStylePartAction>() => R;
    }
  }
}

declare const MSToggleStylePartAction: cocoa.classes.MSToggleStylePartAction;
