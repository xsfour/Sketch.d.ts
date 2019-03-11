/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavBannerButtonCell<T = any> extends cocoa.NSButtonCell {
    isEnabled<R = boolean>(): R;
    _setupAttributes<R = void>(): R;
    disabledWhenInactive<R = boolean>(): R;
    setDisabledWhenInactive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSNavBannerButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSNavBannerButtonCell>(): R;
      new: <R = NSNavBannerButtonCell>() => R;
    }
  }
}

declare const NSNavBannerButtonCell: cocoa.classes.NSNavBannerButtonCell;
