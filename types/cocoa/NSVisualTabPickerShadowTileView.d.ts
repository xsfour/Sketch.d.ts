/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerShadowTileView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _setUpBorderView<R = void>(): R;
    _setUpContentViews<R = void>(): R;
    _getTopBarAnimationDuration_timeOffset_gridAnimation<R = void, P0 = number, P1 = number, P2 = number>(__getTopBarAnimationDuration: P0, _timeOffset: P1, _gridAnimation: P2): R;
    enableEdgeAntialiasingMask<R = void, P0 = boolean>(_enableEdgeAntialiasingMask: P0): R;
    setExposeBorderVisible<R = void, P0 = boolean>(_setExposeBorderVisible: P0): R;
    setCloseButtonVisible<R = void, P0 = boolean>(_setCloseButtonVisible: P0): R;
    cleanupAnimations<R = void>(): R;
    animateToolbarImage_height_gridAnimation<R = void, P0 = unknown, P1 = number, P2 = number>(_animateToolbarImage: P0, _height: P1, _gridAnimation: P2): R;
    _sidebarAnimationWithKeyPath_windowValue_thumbnailValue_forGridAnimation<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(__sidebarAnimationWithKeyPath: P0, _windowValue: P1, _thumbnailValue: P2, _forGridAnimation: P3): R;
    animateSidebarImage_width_gridAnimation<R = void, P0 = unknown, P1 = number, P2 = number>(_animateSidebarImage: P0, _width: P1, _gridAnimation: P2): R;
    containerView<R = NSView>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerShadowTileView<T = any> extends NSView {
      alloc<R = NSVisualTabPickerShadowTileView>(): R;
      new: <R = NSVisualTabPickerShadowTileView>() => R;
      headerHeight<R = number>(): R;
    }
  }
}

declare const NSVisualTabPickerShadowTileView: cocoa.classes.NSVisualTabPickerShadowTileView;
