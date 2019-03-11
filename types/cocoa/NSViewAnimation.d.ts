/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewAnimation<T = any> extends cocoa.NSAnimation {
    _drawView<R = boolean, P0 = unknown>(__drawView: P0): R;
    _freeViewAnimationInfo<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    initWithViewAnimations<R = unknown, P0 = unknown>(_initWithViewAnimations: P0): R;
    _clearAnimationInfo<R = void>(): R;
    _setupAnimationInfo<R = void>(): R;
    viewAnimations<R = cocoa.NSArray>(): R;
    setViewAnimations<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSViewAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = NSViewAnimation>(): R;
      new: <R = NSViewAnimation>() => R;
    }
  }
}

declare const NSViewAnimation: cocoa.classes.NSViewAnimation;
