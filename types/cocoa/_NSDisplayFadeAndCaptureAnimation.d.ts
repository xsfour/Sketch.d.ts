/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayFadeAndCaptureAnimation<T = any> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    fadeOut<R = boolean>(): R;
    setFadeOut<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDisplayFadeAndCaptureAnimation<T = any> extends NSAnimation {
      alloc<R = _NSDisplayFadeAndCaptureAnimation>(): R;
      new: <R = _NSDisplayFadeAndCaptureAnimation>() => R;
    }
  }
}
