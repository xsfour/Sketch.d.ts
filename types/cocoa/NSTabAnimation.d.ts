/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabAnimation<T = any> extends cocoa.NSAnimation {
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    initWithDuration_animationCurve_progressHandler<R = unknown, P0 = number, P1 = number, P2 = cocoa.CDUnknownBlockType>(_initWithDuration: P0, _animationCurve: P1, _progressHandler: P2): R;
  }
  namespace classes {
    export interface NSTabAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = NSTabAnimation>(): R;
      new: <R = NSTabAnimation>() => R;
    }
  }
}

declare const NSTabAnimation: cocoa.classes.NSTabAnimation;
