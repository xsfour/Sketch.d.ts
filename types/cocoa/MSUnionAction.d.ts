/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnionAction<T = any> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanUnion<R = void, P0 = unknown>(_booleanUnion: P0): R;
  }
  namespace classes {
    export interface MSUnionAction<T = any> extends MSBaseBooleanAction {
      alloc<R = MSUnionAction>(): R;
      new: <R = MSUnionAction>() => R;
    }
  }
}

declare const MSUnionAction: cocoa.classes.MSUnionAction;
