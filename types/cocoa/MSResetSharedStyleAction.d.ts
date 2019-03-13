/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetSharedStyleAction<T = any> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    resetSharedStyle<R = void, P0 = unknown>(_resetSharedStyle: P0): R;
  }
  namespace classes {
    export interface MSResetSharedStyleAction<T = any> extends MSBaseSharedObjectAction {
      alloc<R = MSResetSharedStyleAction>(): R;
      new: <R = MSResetSharedStyleAction>() => R;
    }
  }
}

declare const MSResetSharedStyleAction: cocoa.classes.MSResetSharedStyleAction;
