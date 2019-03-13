/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCrossfadeView<T = any> extends NSView {
    crossFadeAnimation<R = _NSTitleControlCrossFadeAnimation>(): R;
    setCrossFadeAnimation<R = void, P0 = _NSTitleControlCrossFadeAnimation>(_v: P0): R;
  }
  namespace classes {
    export interface NSCrossfadeView<T = any> extends NSView {
      alloc<R = NSCrossfadeView>(): R;
      new: <R = NSCrossfadeView>() => R;
    }
  }
}

declare const NSCrossfadeView: cocoa.classes.NSCrossfadeView;
