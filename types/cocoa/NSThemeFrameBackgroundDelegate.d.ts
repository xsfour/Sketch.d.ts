/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeFrameBackgroundDelegate<T = any> extends cocoa.NSObject, cocoa.CALayerDelegateProtocol {
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
    themeFrame<R = cocoa.NSThemeFrame>(): R;
    setThemeFrame<R = void, P0 = cocoa.NSThemeFrame>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSThemeFrameBackgroundDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.CALayerDelegateProtocol {
      alloc<R = NSThemeFrameBackgroundDelegate>(): R;
      new: <R = NSThemeFrameBackgroundDelegate>() => R;
    }
  }
}

declare const NSThemeFrameBackgroundDelegate: cocoa.classes.NSThemeFrameBackgroundDelegate;
