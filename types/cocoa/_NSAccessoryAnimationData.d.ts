/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessoryAnimationData<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    animationsDictionary<R = cocoa.NSDictionary>(): R;
    setAnimationsDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    animator<R = unknown>(): R;
    setAnimator<R = void, P0 = unknown>(_v: P0): R;
    visibilityAnimation<R = cocoa.NSAnimation>(): R;
    setVisibilityAnimation<R = void, P0 = cocoa.NSAnimation>(_v: P0): R;
    animationContextResumeKey<R = cocoa.NSAnimationContextCompletionHandlerSuspension>(): R;
    setAnimationContextResumeKey<R = void, P0 = cocoa.NSAnimationContextCompletionHandlerSuspension>(_v: P0): R;
  }
  namespace classes {
    export interface _NSAccessoryAnimationData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSAccessoryAnimationData>(): R;
      new: <R = _NSAccessoryAnimationData>() => R;
    }
  }
}
