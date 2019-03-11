/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    prepareForDisplay<R = void>(): R;
    prepareDefaults<R = void>(): R;
    gradient<R = cocoa.NSGradient>(): R;
    setGradient<R = void, P0 = cocoa.NSGradient>(_v: P0): R;
    bottomBorder<R = boolean>(): R;
    setBottomBorder<R = void, P0 = boolean>(_v: P0): R;
    rightBorder<R = boolean>(): R;
    setRightBorder<R = void, P0 = boolean>(_v: P0): R;
    leftBorder<R = boolean>(): R;
    setLeftBorder<R = void, P0 = boolean>(_v: P0): R;
    topBorder<R = boolean>(): R;
    setTopBorder<R = void, P0 = boolean>(_v: P0): R;
    borderSize<R = number>(): R;
    setBorderSize<R = void, P0 = number>(_v: P0): R;
    gradientAngle<R = number>(): R;
    setGradientAngle<R = void, P0 = number>(_v: P0): R;
    borderColour<R = cocoa.NSColor>(): R;
    setBorderColour<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    bottomColour<R = cocoa.NSColor>(): R;
    setBottomColour<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    topColour<R = cocoa.NSColor>(): R;
    setTopColour<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSGradientView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSGradientView>(): R;
      new: <R = MSGradientView>() => R;
    }
  }
}

declare const MSGradientView: cocoa.classes.MSGradientView;
