/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarRangeView<T = any> extends cocoa.NSView {
    _coreUIDrawOptions<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _minWidthForSeparateHandles<R = number>(): R;
    fittedSizeForSize<R = cocoa.CGSize, P0 = cocoa.CGSize>(_fittedSizeForSize: P0): R;
    _hasLeftHandle_rightHandle<R = void, P0 = string, P1 = string>(__hasLeftHandle: P0, _rightHandle: P1): R;
    handleAtPoint<R = number, P0 = cocoa.CGPoint>(_handleAtPoint: P0): R;
    _commonViewSetup<R = void>(): R;
    handleMask<R = number>(): R;
    setHandleMask<R = void, P0 = number>(_v: P0): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarRangeView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTouchBarRangeView>(): R;
      new: <R = NSTouchBarRangeView>() => R;
      monoHandleSize<R = cocoa.CGSize>(): R;
    }
  }
}

declare const NSTouchBarRangeView: cocoa.classes.NSTouchBarRangeView;
