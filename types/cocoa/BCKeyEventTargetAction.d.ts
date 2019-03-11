/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCKeyEventTargetAction<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = cocoa.NSObject>(): R;
    setTarget<R = void, P0 = cocoa.NSObject>(_v: P0): R;
  }
  namespace classes {
    export interface BCKeyEventTargetAction<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCKeyEventTargetAction>(): R;
      new: <R = BCKeyEventTargetAction>() => R;
    }
  }
}

declare const BCKeyEventTargetAction: cocoa.classes.BCKeyEventTargetAction;
