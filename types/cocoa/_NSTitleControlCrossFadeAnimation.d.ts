/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTitleControlCrossFadeAnimation<T = any> extends cocoa.NSAnimation {
    _windowWillStartLiveResize<R = void, P0 = unknown>(__windowWillStartLiveResize: P0): R;
    invalidate<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    view<R = cocoa.NSView>(): R;
    setView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    endingFrame<R = cocoa.CGRect>(): R;
    setEndingFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    endingSnapshot<R = cocoa.NSBitmapImageRep>(): R;
    setEndingSnapshot<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    startingFrame<R = cocoa.CGRect>(): R;
    setStartingFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    startingSnapshot<R = cocoa.NSBitmapImageRep>(): R;
    setStartingSnapshot<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTitleControlCrossFadeAnimation<T = any> extends cocoa.classes.NSAnimation {
      alloc<R = _NSTitleControlCrossFadeAnimation>(): R;
      new: <R = _NSTitleControlCrossFadeAnimation>() => R;
    }
  }
}
