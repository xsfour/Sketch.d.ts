/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTooltipHostingView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    refreshToolTip<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setupTooltipHostingView<R = void>(): R;
    awakeFromNib<R = void>(): R;
    toolTipProvider<R = cocoa.NSView>(): R;
    setToolTipProvider<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface MSTooltipHostingView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSTooltipHostingView>(): R;
      new: <R = MSTooltipHostingView>() => R;
    }
  }
}

declare const MSTooltipHostingView: cocoa.classes.MSTooltipHostingView;
