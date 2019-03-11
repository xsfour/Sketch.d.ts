/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollAnimationHelper<T = any> extends cocoa.NSAnimationHelper {
    setIsScrollDueToUserAction<R = void, P0 = boolean>(_setIsScrollDueToUserAction: P0): R;
    setLogPerformanceAnalysis<R = void, P0 = boolean>(_setLogPerformanceAnalysis: P0): R;
    targetOrigin<R = cocoa.CGPoint>(): R;
    changeDestinationToPoint<R = void, P0 = cocoa.CGPoint>(_changeDestinationToPoint: P0): R;
    scrollToPoint<R = void, P0 = cocoa.CGPoint>(_scrollToPoint: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    _currentPoint<R = cocoa.CGPoint>(): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrollAnimationHelper<T = any> extends cocoa.classes.NSAnimationHelper {
      alloc<R = NSScrollAnimationHelper>(): R;
      new: <R = NSScrollAnimationHelper>() => R;
    }
  }
}

declare const NSScrollAnimationHelper: cocoa.classes.NSScrollAnimationHelper;
