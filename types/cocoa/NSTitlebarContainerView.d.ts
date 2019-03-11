/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarContainerView<T = any> extends cocoa.NSView {
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
    _updateNonRootLayerBackedWindowChromeBackstopRenderingView<R = void>(): R;
    _setCornerMaskIfNeeded<R = void>(): R;
    _clearCornerMaskIfNeeded<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _themeFrame<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    decorationView<R = cocoa._NSTitlebarDecorationView>(): R;
    setDecorationView<R = void, P0 = cocoa._NSTitlebarDecorationView>(_v: P0): R;
    buttonRevealAmount<R = number>(): R;
    setButtonRevealAmount<R = void, P0 = number>(_v: P0): R;
    titleHeightToHideInFullScreen<R = number>(): R;
    associatedThemeFrame<R = cocoa.NSThemeFrame>(): R;
    setAssociatedThemeFrame<R = void, P0 = cocoa.NSThemeFrame>(_v: P0): R;
    shouldRoundCorners<R = boolean>(): R;
    setShouldRoundCorners<R = void, P0 = boolean>(_v: P0): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
    drawsBottomSeparator<R = boolean>(): R;
    setDrawsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarContainerView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTitlebarContainerView>(): R;
      new: <R = NSTitlebarContainerView>() => R;
    }
  }
}

declare const NSTitlebarContainerView: cocoa.classes.NSTitlebarContainerView;
