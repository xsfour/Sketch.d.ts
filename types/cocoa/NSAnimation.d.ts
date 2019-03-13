/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimation<T = any> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    clearStopAnimation<R = void>(): R;
    clearStartAnimation<R = void>(): R;
    stopWhenAnimation_reachesProgress<R = void, P0 = unknown, P1 = number>(_stopWhenAnimation: P0, _reachesProgress: P1): R;
    startWhenAnimation_reachesProgress<R = void, P0 = unknown, P1 = number>(_startWhenAnimation: P0, _reachesProgress: P1): R;
    removeProgressMark<R = void, P0 = number>(_removeProgressMark: P0): R;
    addProgressMark<R = void, P0 = number>(_addProgressMark: P0): R;
    _callHandlerWithProgress_didStop_didFinish<R = void, P0 = number, P1 = boolean, P2 = boolean>(__callHandlerWithProgress: P0, _didStop: P1, _didFinish: P2): R;
    stopAnimation<R = void>(): R;
    startAnimation<R = void>(): R;
    copy<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDuration_animationCurve<R = unknown, P0 = number, P1 = number>(_initWithDuration: P0, _animationCurve: P1): R;
    _clearAllTargetAnimations<R = void>(): R;
    _progressForAnimation_start<R = number, P0 = unknown, P1 = boolean>(__progressForAnimation: P0, _start: P1): R;
    _removeTargetAnimation_start<R = void, P0 = unknown, P1 = boolean>(__removeTargetAnimation: P0, _start: P1): R;
    _addTargetAnimation_start_atProgress<R = void, P0 = unknown, P1 = boolean, P2 = number>(__addTargetAnimation: P0, _start: P1, _atProgress: P2): R;
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    _stopAnimation<R = void, P0 = number>(__stopAnimation: P0): R;
    _startAnimation<R = void>(): R;
    _advanceTimeWithDisplayLink<R = void, P0 = unknown>(__advanceTimeWithDisplayLink: P0): R;
    _instantProgress<R = number>(): R;
    _runInNewThread<R = void>(): R;
    _startRunningNonBlocking<R = void>(): R;
    _runBlocking<R = void>(): R;
    _createDisplayLink<R = void, P0 = boolean>(__createDisplayLink: P0): R;
    _screen<R = unknown>(): R;
    _setSendProgressAllTheTime<R = void, P0 = boolean>(__setSendProgressAllTheTime: P0): R;
    runLoopModesForAnimating<R = NSArray>(): R;
    progressMarks<R = NSArray>(): R;
    setProgressMarks<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = NSAnimationDelegate>(): R;
    setDelegate<R = void, P0 = NSAnimationDelegate>(_v: P0): R;
    currentValue<R = number>(): R;
    animationCurve<R = number>(): R;
    setAnimationCurve<R = void, P0 = number>(_v: P0): R;
    frameRate<R = number>(): R;
    setFrameRate<R = void, P0 = number>(_v: P0): R;
    animationBlockingMode<R = number>(): R;
    setAnimationBlockingMode<R = void, P0 = number>(_v: P0): R;
    duration<R = number>(): R;
    setDuration<R = void, P0 = number>(_v: P0): R;
    currentProgress<R = number>(): R;
    setCurrentProgress<R = void, P0 = number>(_v: P0): R;
    animating<R = boolean>(): R;
    _progressHandler<R = CDUnknownBlockType>(): R;
    set_progressHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSAnimation<T = any> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSAnimation>(): R;
      new: <R = NSAnimation>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSAnimation: cocoa.classes.NSAnimation;
