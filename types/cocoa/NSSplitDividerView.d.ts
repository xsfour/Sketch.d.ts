/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitDividerView<T = any> extends cocoa.NSView {
    _coreUIState<R = cocoa.__CFString>(): R;
    _coreUIOrientation<R = cocoa.__CFString>(): R;
    _coreUIDimpleVariant<R = cocoa.__CFString>(): R;
    _isInTexturedWindow<R = boolean>(): R;
    _coreUIOptions<R = unknown>(): R;
    _drawDimpleInRect<R = void, P0 = cocoa.CGRect>(__drawDimpleInRect: P0): R;
    allowsVibrancy<R = boolean>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    effectiveThickness<R = number>(): R;
    initWithStyle_orientation<R = unknown, P0 = number, P1 = number>(_initWithStyle: P0, _orientation: P1): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    thickness<R = cocoa.NSNumber>(): R;
    setThickness<R = void, P0 = cocoa.NSNumber>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSSplitDividerView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSplitDividerView>(): R;
      new: <R = NSSplitDividerView>() => R;
    }
  }
}

declare const NSSplitDividerView: cocoa.classes.NSSplitDividerView;
