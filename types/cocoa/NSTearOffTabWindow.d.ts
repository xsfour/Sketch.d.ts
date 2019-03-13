/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTearOffTabWindow<T = any> extends NSWindow {
    didDetachWindow<R = boolean>(): R;
    mouseUpAfterMissionControl<R = void>(): R;
    enteredMissionControlWithTab<R = void>(): R;
    detachedWindow<R = unknown>(): R;
    detachAndMoveWindowToSpaceIfNecessary<R = boolean>(): R;
    shouldDisableTabBarDropTargets<R = boolean>(): R;
    beginServerSideWindowDragUsingOffset<R = void, P0 = CGSize>(_beginServerSideWindowDragUsingOffset: P0): R;
    initWithContentRect_tornFromWindow<R = unknown, P0 = CGRect, P1 = unknown>(_initWithContentRect: P0, _tornFromWindow: P1): R;
    tabDelegate<R = NSTearOffTabWindowDelegate>(): R;
    setTabDelegate<R = void, P0 = NSTearOffTabWindowDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSTearOffTabWindow<T = any> extends NSWindow {
      alloc<R = NSTearOffTabWindow>(): R;
      new: <R = NSTearOffTabWindow>() => R;
    }
  }
}

declare const NSTearOffTabWindow: cocoa.classes.NSTearOffTabWindow;
