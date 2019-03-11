/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddInnerShadowAction<T = any> extends cocoa.MSBaseStyleAction {
    addInnerShadow<R = void, P0 = unknown>(_addInnerShadow: P0): R;
  }
  namespace classes {
    export interface MSAddInnerShadowAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSAddInnerShadowAction>(): R;
      new: <R = MSAddInnerShadowAction>() => R;
    }
  }
}

declare const MSAddInnerShadowAction: cocoa.classes.MSAddInnerShadowAction;
