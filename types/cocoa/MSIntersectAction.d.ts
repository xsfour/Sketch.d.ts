/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntersectAction<T = any> extends MSBaseBooleanAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    booleanIntersect<R = void, P0 = unknown>(_booleanIntersect: P0): R;
  }
  namespace classes {
    export interface MSIntersectAction<T = any> extends MSBaseBooleanAction {
      alloc<R = MSIntersectAction>(): R;
      new: <R = MSIntersectAction>() => R;
    }
  }
}

declare const MSIntersectAction: cocoa.classes.MSIntersectAction;
