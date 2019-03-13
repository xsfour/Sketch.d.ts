/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTabMergeAnimation<T = any> extends NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    _doAnimationWork<R = void>(): R;
    _finished<R = void>(): R;
    run<R = void>(): R;
    initWithWindows_targetTabFrames_targetWindow_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_initWithWindows: P0, _targetTabFrames: P1, _targetWindow: P2, _completionHandler: P3): R;
  }
  namespace classes {
    export interface NSWindowTabMergeAnimation<T = any> extends NSAnimation {
      alloc<R = NSWindowTabMergeAnimation>(): R;
      new: <R = NSWindowTabMergeAnimation>() => R;
    }
  }
}

declare const NSWindowTabMergeAnimation: cocoa.classes.NSWindowTabMergeAnimation;
