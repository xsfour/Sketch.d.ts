/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTargetAnimationInfo<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    description<R = unknown>(): R;
    startOrStopTargetAnimation<R = void>(): R;
    floatValue<R = number>(): R;
    initWithAnimation_progress_start<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_initWithAnimation: P0, _progress: P1, _start: P2): R;
  }
  namespace classes {
    export interface NSTargetAnimationInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSTargetAnimationInfo>(): R;
      new: <R = NSTargetAnimationInfo>() => R;
    }
  }
}

declare const NSTargetAnimationInfo: cocoa.classes.NSTargetAnimationInfo;
