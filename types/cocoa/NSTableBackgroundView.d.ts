/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableBackgroundView<T = any> extends cocoa.NSView {
    _preferredAppearance<R = unknown>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _drawAlternatingBackgroundAndGridInRect<R = void, P0 = cocoa.CGRect>(__drawAlternatingBackgroundAndGridInRect: P0): R;
    _callPublicDrawBackground_drawGrid_inRect<R = void, P0 = boolean, P1 = boolean, P2 = cocoa.CGRect>(__callPublicDrawBackground: P0, _drawGrid: P1, _inRect: P2): R;
    _drawRect_inTableCoordsWithHandler<R = void, P0 = cocoa.CGRect, P1 = cocoa.CDUnknownBlockType>(__drawRect: P0, _inTableCoordsWithHandler: P1): R;
    _drawVerticalGridInDirtyRect<R = void, P0 = cocoa.CGRect>(__drawVerticalGridInDirtyRect: P0): R;
    _drawGradientBackground<R = void>(): R;
    isFlipped<R = boolean>(): R;
    forRubberBanding<R = boolean>(): R;
    setForRubberBanding<R = void, P0 = boolean>(_v: P0): R;
    shouldDrawVerticalGrid<R = boolean>(): R;
    setShouldDrawVerticalGrid<R = void, P0 = boolean>(_v: P0): R;
    gradient<R = cocoa.NSGradient>(): R;
    setGradient<R = void, P0 = cocoa.NSGradient>(_v: P0): R;
    backgroundImage<R = cocoa.NSImage>(): R;
    setBackgroundImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    secondAlternatingColor<R = cocoa.NSColor>(): R;
    setSecondAlternatingColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    firstAlternatingColor<R = cocoa.NSColor>(): R;
    setFirstAlternatingColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTableBackgroundView>(): R;
      new: <R = NSTableBackgroundView>() => R;
    }
  }
}

declare const NSTableBackgroundView: cocoa.classes.NSTableBackgroundView;
