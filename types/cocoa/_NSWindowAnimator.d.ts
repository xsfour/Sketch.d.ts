/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowAnimator<T = any> extends _NSObjectAnimator {
    contentView<R = unknown>(): R;
    _borderView<R = unknown>(): R;
    setFrame_display_animate<R = void, P0 = CGRect, P1 = boolean, P2 = boolean>(_setFrame: P0, _display: P1, _animate: P2): R;
    setFrame_display<R = void, P0 = CGRect, P1 = boolean>(_setFrame: P0, _display: P1): R;
    setFrameTopLeftPoint<R = void, P0 = CGPoint>(_setFrameTopLeftPoint: P0): R;
    setFrameOrigin<R = void, P0 = CGPoint>(_setFrameOrigin: P0): R;
    setAlphaValue<R = void, P0 = number>(_setAlphaValue: P0): R;
  }
  namespace classes {
    export interface _NSWindowAnimator<T = any> extends _NSObjectAnimator {  }
  }
}
