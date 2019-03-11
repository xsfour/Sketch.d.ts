/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDesktopImageView<T = any> extends cocoa.NSView {
    _setDesktopImageBaseOnWorkspace<R = void>(): R;
    _startLoadingDesktopPicture<R = void>(): R;
    _forceReloadDesktopPicture<R = void>(): R;
    displayID<R = number>(): R;
    _stopObservingWindow<R = void>(): R;
    _screenChanged<R = void, P0 = unknown>(__screenChanged: P0): R;
    _startObservingWindow<R = void>(): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSDesktopImageView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSDesktopImageView>(): R;
      new: <R = NSDesktopImageView>() => R;
    }
  }
}

declare const NSDesktopImageView: cocoa.classes.NSDesktopImageView;
