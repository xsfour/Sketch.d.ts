/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmallLegacyScrollerImp<T = any> extends cocoa.NSLegacyScrollerImp {
    knobMinLength<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace classes {
    export interface NSSmallLegacyScrollerImp<T = any> extends cocoa.classes.NSLegacyScrollerImp {
      alloc<R = NSSmallLegacyScrollerImp>(): R;
      new: <R = NSSmallLegacyScrollerImp>() => R;
    }
  }
}

declare const NSSmallLegacyScrollerImp: cocoa.classes.NSSmallLegacyScrollerImp;
