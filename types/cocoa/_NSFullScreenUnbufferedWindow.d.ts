/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenUnbufferedWindow<T = any> extends cocoa._NSBorderlessLayerTreeProjectionWindow {
    _createContentViewWithFrame_customColor<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(__createContentViewWithFrame: P0, _customColor: P1): R;
    initWithContentRect_screen_customColor_useBlurredBackground<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_initWithContentRect: P0, _screen: P1, _customColor: P2, _useBlurredBackground: P3): R;
    customColor<R = cocoa.NSColor>(): R;
    setCustomColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenUnbufferedWindow<T = any> extends cocoa.classes._NSBorderlessLayerTreeProjectionWindow {
      alloc<R = _NSFullScreenUnbufferedWindow>(): R;
      new: <R = _NSFullScreenUnbufferedWindow>() => R;
    }
  }
}
