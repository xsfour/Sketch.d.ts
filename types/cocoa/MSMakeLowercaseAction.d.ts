/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMakeLowercaseAction<T = any> extends cocoa.MSTextTransformAction {
    label<R = unknown>(): R;
    makeLowercase<R = void, P0 = unknown>(_makeLowercase: P0): R;
  }
  namespace classes {
    export interface MSMakeLowercaseAction<T = any> extends cocoa.classes.MSTextTransformAction {
      alloc<R = MSMakeLowercaseAction>(): R;
      new: <R = MSMakeLowercaseAction>() => R;
    }
  }
}

declare const MSMakeLowercaseAction: cocoa.classes.MSMakeLowercaseAction;
