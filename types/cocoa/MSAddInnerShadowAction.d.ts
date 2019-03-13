/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddInnerShadowAction<T = any> extends MSBaseStyleAction {
    addInnerShadow<R = void, P0 = unknown>(_addInnerShadow: P0): R;
  }
  namespace classes {
    export interface MSAddInnerShadowAction<T = any> extends MSBaseStyleAction {
      alloc<R = MSAddInnerShadowAction>(): R;
      new: <R = MSAddInnerShadowAction>() => R;
    }
  }
}

declare const MSAddInnerShadowAction: cocoa.classes.MSAddInnerShadowAction;
