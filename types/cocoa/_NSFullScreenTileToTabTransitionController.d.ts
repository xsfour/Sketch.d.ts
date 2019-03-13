/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToTabTransitionController<T = any> extends _NSFullScreenTransitionController {
    _transitionComplete<R = void>(): R;
    _performAnimation<R = void>(): R;
    _moveWindowToFinalState<R = void>(): R;
    _setupAndPresentOverlayWindow<R = void>(): R;
    startingSpace<R = unknown>(): R;
    initFromWindow_toTabBarInWindow_space<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initFromWindow: P0, _toTabBarInWindow: P1, _space: P2): R;
  }
  namespace classes {
    export interface _NSFullScreenTileToTabTransitionController<T = any> extends _NSFullScreenTransitionController {
      alloc<R = _NSFullScreenTileToTabTransitionController>(): R;
      new: <R = _NSFullScreenTileToTabTransitionController>() => R;
      transitionFromWindow_toTabBarInWindow_space<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_transitionFromWindow: P0, _toTabBarInWindow: P1, _space: P2): R;
    }
  }
}
