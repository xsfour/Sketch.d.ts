/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddShadowAction<T = any> extends cocoa.MSBaseStyleAction {
    addShadow<R = void, P0 = unknown>(_addShadow: P0): R;
  }
  namespace classes {
    export interface MSAddShadowAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSAddShadowAction>(): R;
      new: <R = MSAddShadowAction>() => R;
    }
  }
}

declare const MSAddShadowAction: cocoa.classes.MSAddShadowAction;
