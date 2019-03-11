/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFillAction<T = any> extends cocoa.MSBaseStyleAction {
    addFill<R = void, P0 = unknown>(_addFill: P0): R;
  }
  namespace classes {
    export interface MSAddFillAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSAddFillAction>(): R;
      new: <R = MSAddFillAction>() => R;
    }
  }
}

declare const MSAddFillAction: cocoa.classes.MSAddFillAction;
