/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToTabTransitionOverlayWindow<T = any> extends cocoa._NSFullScreenTileResizeCrossfadeOverlayWindow {
    captureAfterWindowsUsingTileFrame_destinationTab<R = void, P0 = cocoa.CGRect, P1 = unknown>(_captureAfterWindowsUsingTileFrame: P0, _destinationTab: P1): R;
  }
  namespace classes {
    export interface _NSFullScreenTileToTabTransitionOverlayWindow<T = any> extends cocoa.classes._NSFullScreenTileResizeCrossfadeOverlayWindow {
      alloc<R = _NSFullScreenTileToTabTransitionOverlayWindow>(): R;
      new: <R = _NSFullScreenTileToTabTransitionOverlayWindow>() => R;
    }
  }
}
