/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegularOverlayScrollerImp<T = any> extends cocoa.NSOverlayScrollerImp {
    trackOverlapEndInset<R = number>(): R;
    knobMinLength<R = number>(): R;
    trackSideInset<R = number>(): R;
    trackEndInset<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace classes {
    export interface NSRegularOverlayScrollerImp<T = any> extends cocoa.classes.NSOverlayScrollerImp {
      alloc<R = NSRegularOverlayScrollerImp>(): R;
      new: <R = NSRegularOverlayScrollerImp>() => R;
    }
  }
}

declare const NSRegularOverlayScrollerImp: cocoa.classes.NSRegularOverlayScrollerImp;
