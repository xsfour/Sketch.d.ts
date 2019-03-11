/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyboardFocusClipView<T = any> extends cocoa.NSClipView {
    _getFocusRingFrame<R = cocoa.CGRect>(): R;
    _clearFocusForView<R = void>(): R;
    _adjustFocusRingLocation<R = void, P0 = cocoa.CGPoint>(__adjustFocusRingLocation: P0): R;
    _adjustFocusRingSize<R = void, P0 = cocoa.CGSize>(__adjustFocusRingSize: P0): R;
    _setFocusForCell_forView_withFrame_withFocusRingFrame_withInset<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect, P3 = cocoa.CGRect, P4 = number>(__setFocusForCell: P0, _forView: P1, _withFrame: P2, _withFocusRingFrame: P3, _withInset: P4): R;
    _drawKeyboardFocusRingWithFrame_forCell<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawKeyboardFocusRingWithFrame: P0, _forCell: P1): R;
    _drawKeyboardFocusRingWithFrame<R = void, P0 = cocoa.CGRect>(__drawKeyboardFocusRingWithFrame: P0): R;
    _setKeyboardFocusRingNeedsDisplay<R = void>(): R;
  }
  namespace classes {
    export interface _NSKeyboardFocusClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = _NSKeyboardFocusClipView>(): R;
      new: <R = _NSKeyboardFocusClipView>() => R;
    }
  }
}
