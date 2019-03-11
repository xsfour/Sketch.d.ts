/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegularLegacyScrollerImp<T = any> extends cocoa.NSLegacyScrollerImp {
    knobMinLength<R = number>(): R;
    trackWidth<R = number>(): R;
    controlSize<R = number>(): R;
  }
  namespace classes {
    export interface NSRegularLegacyScrollerImp<T = any> extends cocoa.classes.NSLegacyScrollerImp {
      alloc<R = NSRegularLegacyScrollerImp>(): R;
      new: <R = NSRegularLegacyScrollerImp>() => R;
    }
  }
}

declare const NSRegularLegacyScrollerImp: cocoa.classes.NSRegularLegacyScrollerImp;
