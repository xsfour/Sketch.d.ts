/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitDividerView<T = any> extends NSView {
    _coreUIState<R = __CFString>(): R;
    _coreUIOrientation<R = __CFString>(): R;
    _coreUIDimpleVariant<R = __CFString>(): R;
    _isInTexturedWindow<R = boolean>(): R;
    _coreUIOptions<R = unknown>(): R;
    _drawDimpleInRect<R = void, P0 = CGRect>(__drawDimpleInRect: P0): R;
    allowsVibrancy<R = boolean>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    effectiveThickness<R = number>(): R;
    initWithStyle_orientation<R = unknown, P0 = number, P1 = number>(_initWithStyle: P0, _orientation: P1): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    thickness<R = NSNumber>(): R;
    setThickness<R = void, P0 = NSNumber>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSSplitDividerView<T = any> extends NSView {
      alloc<R = NSSplitDividerView>(): R;
      new: <R = NSSplitDividerView>() => R;
    }
  }
}

declare const NSSplitDividerView: cocoa.classes.NSSplitDividerView;
