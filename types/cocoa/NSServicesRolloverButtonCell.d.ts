/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesRolloverButtonCell<T = any> extends cocoa.NSButtonCell {
    rectForBounds_preferredEdge<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_rectForBounds: P0, _preferredEdge: P1): R;
    initWithStyle<R = unknown, P0 = number>(_initWithStyle: P0): R;
    style<R = number>(): R;
  }
  namespace classes {
    export interface NSServicesRolloverButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSServicesRolloverButtonCell>(): R;
      new: <R = NSServicesRolloverButtonCell>() => R;
      serviceRolloverButtonCellForStyle<R = unknown, P0 = number>(_serviceRolloverButtonCellForStyle: P0): R;
    }
  }
}

declare const NSServicesRolloverButtonCell: cocoa.classes.NSServicesRolloverButtonCell;
