/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRowViewSpringAnimation<T = any> extends cocoa.NSSpringAnimation {
    endPercentage<R = number>(): R;
    setEndPercentage<R = void, P0 = number>(_v: P0): R;
    startPercentage<R = number>(): R;
    setStartPercentage<R = void, P0 = number>(_v: P0): R;
    percentage<R = number>(): R;
  }
  namespace classes {
    export interface NSTableRowViewSpringAnimation<T = any> extends cocoa.classes.NSSpringAnimation {
      alloc<R = NSTableRowViewSpringAnimation>(): R;
      new: <R = NSTableRowViewSpringAnimation>() => R;
    }
  }
}

declare const NSTableRowViewSpringAnimation: cocoa.classes.NSTableRowViewSpringAnimation;
