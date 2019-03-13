/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateSharedStyleAction<T = any> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    createSharedStyle<R = void, P0 = unknown>(_createSharedStyle: P0): R;
  }
  namespace classes {
    export interface MSCreateSharedStyleAction<T = any> extends MSBaseSharedObjectAction {
      alloc<R = MSCreateSharedStyleAction>(): R;
      new: <R = MSCreateSharedStyleAction>() => R;
    }
  }
}

declare const MSCreateSharedStyleAction: cocoa.classes.MSCreateSharedStyleAction;
