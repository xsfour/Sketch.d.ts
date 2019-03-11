/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRoundedDashStrokeView<T = any> extends cocoa.NSView {
    innerDashColor<R = cocoa.NSColor>(): R;
    setInnerDashColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    dashColor<R = cocoa.NSColor>(): R;
    setDashColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    strokeThickness<R = number>(): R;
    setStrokeThickness<R = void, P0 = number>(_v: P0): R;
    lineDash<R = number>(): R;
    setLineDash<R = void, P0 = number>(_v: P0): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSRoundedDashStrokeView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSRoundedDashStrokeView>(): R;
      new: <R = NSRoundedDashStrokeView>() => R;
    }
  }
}

declare const NSRoundedDashStrokeView: cocoa.classes.NSRoundedDashStrokeView;
