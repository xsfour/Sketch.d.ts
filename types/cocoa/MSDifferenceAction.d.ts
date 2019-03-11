/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDifferenceAction<T = any> extends cocoa.MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanDifference<R = void, P0 = unknown>(_booleanDifference: P0): R;
  }
  namespace classes {
    export interface MSDifferenceAction<T = any> extends cocoa.classes.MSBaseBooleanAction {
      alloc<R = MSDifferenceAction>(): R;
      new: <R = MSDifferenceAction>() => R;
    }
  }
}

declare const MSDifferenceAction: cocoa.classes.MSDifferenceAction;
