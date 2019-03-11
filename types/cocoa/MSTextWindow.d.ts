/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextWindow<T = any> extends cocoa.NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
    addTextView_toView<R = void, P0 = unknown, P1 = unknown>(_addTextView: P0, _toView: P1): R;
    moveToRect_contentDrawViewRect_behaviour<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = number>(_moveToRect: P0, _contentDrawViewRect: P1, _behaviour: P2): R;
    initWithRect<R = unknown, P0 = cocoa.CGRect>(_initWithRect: P0): R;
    textView<R = cocoa.NSTextView>(): R;
    setTextView<R = void, P0 = cocoa.NSTextView>(_v: P0): R;
    contentDrawView<R = cocoa.MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = cocoa.MSContentDrawView>(_v: P0): R;
  }
  namespace classes {
    export interface MSTextWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = MSTextWindow>(): R;
      new: <R = MSTextWindow>() => R;
      adjustFrameWidth_alignment<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_adjustFrameWidth: P0, _alignment: P1): R;
      adjustFrameHeight<R = cocoa.CGRect, P0 = cocoa.CGRect>(_adjustFrameHeight: P0): R;
      makeBiggerRect_withBehaviour_alignment<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number, P2 = number>(_makeBiggerRect: P0, _withBehaviour: P1, _alignment: P2): R;
    }
  }
}

declare const MSTextWindow: cocoa.classes.MSTextWindow;
