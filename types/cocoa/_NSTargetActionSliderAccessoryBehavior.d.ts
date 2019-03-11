/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTargetActionSliderAccessoryBehavior<T = any> extends cocoa.NSSliderAccessoryBehavior {
    cxx_destruct<R = void>(): R;
    hash<R = number>(): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    action<R = string>(): R;
    target<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTargetActionSliderAccessoryBehavior<T = any> extends cocoa.classes.NSSliderAccessoryBehavior {
      alloc<R = _NSTargetActionSliderAccessoryBehavior>(): R;
      new: <R = _NSTargetActionSliderAccessoryBehavior>() => R;
    }
  }
}
