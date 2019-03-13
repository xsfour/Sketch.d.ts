/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyScrollerImp<T = any> extends NSScrollerImp {
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    knobEndInset<R = number>(): R;
    trackSideInset<R = number>(): R;
    setTrackAlpha<R = void, P0 = number>(_setTrackAlpha: P0): R;
    setKnobAlpha<R = void, P0 = number>(_setKnobAlpha: P0): R;
    scrollerStyle<R = number>(): R;
  }
  namespace classes {
    export interface NSLegacyScrollerImp<T = any> extends NSScrollerImp {
      alloc<R = NSLegacyScrollerImp>(): R;
      new: <R = NSLegacyScrollerImp>() => R;
    }
  }
}

declare const NSLegacyScrollerImp: cocoa.classes.NSLegacyScrollerImp;
