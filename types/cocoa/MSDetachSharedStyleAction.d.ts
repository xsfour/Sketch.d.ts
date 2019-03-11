/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDetachSharedStyleAction<T = any> extends cocoa.MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    detachSharedStyle<R = void, P0 = unknown>(_detachSharedStyle: P0): R;
  }
  namespace classes {
    export interface MSDetachSharedStyleAction<T = any> extends cocoa.classes.MSBaseSharedObjectAction {
      alloc<R = MSDetachSharedStyleAction>(): R;
      new: <R = MSDetachSharedStyleAction>() => R;
    }
  }
}

declare const MSDetachSharedStyleAction: cocoa.classes.MSDetachSharedStyleAction;
