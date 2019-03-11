/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToModalTransitionOverlayWindow<T = any> extends cocoa._NSFullScreenTileResizeCrossfadeOverlayWindow {
    captureAfterWindowsUsingTileFrame_collapsedTabWindow<R = void, P0 = cocoa.CGRect, P1 = unknown>(_captureAfterWindowsUsingTileFrame: P0, _collapsedTabWindow: P1): R;
  }
  namespace classes {
    export interface _NSFullScreenTileToModalTransitionOverlayWindow<T = any> extends cocoa.classes._NSFullScreenTileResizeCrossfadeOverlayWindow {
      alloc<R = _NSFullScreenTileToModalTransitionOverlayWindow>(): R;
      new: <R = _NSFullScreenTileToModalTransitionOverlayWindow>() => R;
    }
  }
}
