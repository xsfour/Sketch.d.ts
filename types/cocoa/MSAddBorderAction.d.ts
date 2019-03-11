/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddBorderAction<T = any> extends cocoa.MSBaseStyleAction {
    addBorder<R = void, P0 = unknown>(_addBorder: P0): R;
  }
  namespace classes {
    export interface MSAddBorderAction<T = any> extends cocoa.classes.MSBaseStyleAction {
      alloc<R = MSAddBorderAction>(): R;
      new: <R = MSAddBorderAction>() => R;
    }
  }
}

declare const MSAddBorderAction: cocoa.classes.MSAddBorderAction;
