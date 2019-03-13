/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeAction<T = any> extends MSBaseShapeAction {
    starShape<R = void, P0 = unknown>(_starShape: P0): R;
  }
  namespace classes {
    export interface MSStarShapeAction<T = any> extends MSBaseShapeAction {
      alloc<R = MSStarShapeAction>(): R;
      new: <R = MSStarShapeAction>() => R;
    }
  }
}

declare const MSStarShapeAction: cocoa.classes.MSStarShapeAction;
