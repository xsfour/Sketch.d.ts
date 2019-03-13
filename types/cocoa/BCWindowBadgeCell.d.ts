/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCWindowBadgeCell<T = any> extends NSButtonCell {
    fittingTitleSize<R = CGSize>(): R;
    backgroundColorForBadge<R = unknown, P0 = unknown>(_backgroundColorForBadge: P0): R;
  }
  namespace classes {
    export interface BCWindowBadgeCell<T = any> extends NSButtonCell {
      alloc<R = BCWindowBadgeCell>(): R;
      new: <R = BCWindowBadgeCell>() => R;
    }
  }
}

declare const BCWindowBadgeCell: cocoa.classes.BCWindowBadgeCell;
