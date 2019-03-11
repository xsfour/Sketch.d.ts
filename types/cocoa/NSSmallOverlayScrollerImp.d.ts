/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmallOverlayScrollerImp<T = any> extends cocoa.NSOverlayScrollerImp {
    trackOverlapEndInset<R = number>(): R;
    knobMinLength<R = number>(): R;
    trackSideInset<R = number>(): R;
    trackEndInset<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace classes {
    export interface NSSmallOverlayScrollerImp<T = any> extends cocoa.classes.NSOverlayScrollerImp {
      alloc<R = NSSmallOverlayScrollerImp>(): R;
      new: <R = NSSmallOverlayScrollerImp>() => R;
    }
  }
}

declare const NSSmallOverlayScrollerImp: cocoa.classes.NSSmallOverlayScrollerImp;
