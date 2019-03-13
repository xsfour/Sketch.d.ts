/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBlur<T = any> extends _MSStyleBlur {
    cropRadius<R = number>(): R;
    userVisibleMotionAngle<R = number>(): R;
    setUserVisibleMotionAngle<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSStyleBlur<T = any> extends _MSStyleBlur {
      alloc<R = MSStyleBlur>(): R;
      new: <R = MSStyleBlur>() => R;
      keyPathsForValuesAffectingUserVisibleMotionAngle<R = unknown>(): R;
    }
  }
}

declare const MSStyleBlur: cocoa.classes.MSStyleBlur;
