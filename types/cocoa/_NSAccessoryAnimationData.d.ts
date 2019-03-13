/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessoryAnimationData<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    animationsDictionary<R = NSDictionary>(): R;
    setAnimationsDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    animator<R = unknown>(): R;
    setAnimator<R = void, P0 = unknown>(_v: P0): R;
    visibilityAnimation<R = NSAnimation>(): R;
    setVisibilityAnimation<R = void, P0 = NSAnimation>(_v: P0): R;
    animationContextResumeKey<R = NSAnimationContextCompletionHandlerSuspension>(): R;
    setAnimationContextResumeKey<R = void, P0 = NSAnimationContextCompletionHandlerSuspension>(_v: P0): R;
  }
  namespace classes {
    export interface _NSAccessoryAnimationData<T = any> extends NSObject {
      alloc<R = _NSAccessoryAnimationData>(): R;
      new: <R = _NSAccessoryAnimationData>() => R;
    }
  }
}
