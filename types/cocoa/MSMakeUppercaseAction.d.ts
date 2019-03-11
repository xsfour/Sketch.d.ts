/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeUppercaseAction<T = any> extends cocoa.MSTextTransformAction {
    label<R = unknown>(): R;
    makeUppercase<R = void, P0 = unknown>(_makeUppercase: P0): R;
  }
  namespace classes {
    export interface MSMakeUppercaseAction<T = any> extends cocoa.classes.MSTextTransformAction {
      alloc<R = MSMakeUppercaseAction>(): R;
      new: <R = MSMakeUppercaseAction>() => R;
    }
  }
}

declare const MSMakeUppercaseAction: cocoa.classes.MSMakeUppercaseAction;
