/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObjectAnimator<T = any> extends cocoa.NSProxy {
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    animator<R = unknown>(): R;
    initWithTarget<R = unknown, P0 = unknown>(_initWithTarget: P0): R;
  }
  namespace classes {
    export interface _NSObjectAnimator<T = any> extends cocoa.classes.NSProxy {
      _animatorClassForTargetClass<R = unknown, P0 = unknown>(__animatorClassForTargetClass: P0): R;
    }
  }
}
