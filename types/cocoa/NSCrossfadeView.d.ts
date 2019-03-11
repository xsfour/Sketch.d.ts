/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCrossfadeView<T = any> extends cocoa.NSView {
    crossFadeAnimation<R = cocoa._NSTitleControlCrossFadeAnimation>(): R;
    setCrossFadeAnimation<R = void, P0 = cocoa._NSTitleControlCrossFadeAnimation>(_v: P0): R;
  }
  namespace classes {
    export interface NSCrossfadeView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCrossfadeView>(): R;
      new: <R = NSCrossfadeView>() => R;
    }
  }
}

declare const NSCrossfadeView: cocoa.classes.NSCrossfadeView;
