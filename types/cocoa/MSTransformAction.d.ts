/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransformAction<T = any> extends MSEventHandlerAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    transform<R = void, P0 = unknown>(_transform: P0): R;
  }
  namespace classes {
    export interface MSTransformAction<T = any> extends MSEventHandlerAction {
      alloc<R = MSTransformAction>(): R;
      new: <R = MSTransformAction>() => R;
    }
  }
}

declare const MSTransformAction: cocoa.classes.MSTransformAction;
