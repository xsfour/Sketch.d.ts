/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlobalPreferenceTransitionOverlay<T = any> extends cocoa.NSWindow {
    endPresentation<R = void>(): R;
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    initOnScreen<R = unknown, P0 = unknown>(_initOnScreen: P0): R;
  }
  namespace classes {
    export interface NSGlobalPreferenceTransitionOverlay<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSGlobalPreferenceTransitionOverlay>(): R;
      new: <R = NSGlobalPreferenceTransitionOverlay>() => R;
    }
  }
}

declare const NSGlobalPreferenceTransitionOverlay: cocoa.classes.NSGlobalPreferenceTransitionOverlay;
