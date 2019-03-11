/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarView<T = any> extends cocoa.NSVisualEffectView {
    _titleTextFieldView<R = unknown>(): R;
    _removeTrackingAreaIfNeeded<R = void>(): R;
    _isHUDWindow<R = boolean>(): R;
    titleFont<R = unknown>(): R;
    associatedThemeFrame<R = cocoa.NSThemeFrame>(): R;
    setAssociatedThemeFrame<R = void, P0 = cocoa.NSThemeFrame>(_v: P0): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarView<T = any> extends cocoa.classes.NSVisualEffectView {
      alloc<R = NSTitlebarView>(): R;
      new: <R = NSTitlebarView>() => R;
    }
  }
}

declare const NSTitlebarView: cocoa.classes.NSTitlebarView;
