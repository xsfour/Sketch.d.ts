/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextFieldCell<T = any> extends cocoa.NSTextFieldCell {
    statusStringFieldRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_statusStringFieldRectForBounds: P0): R;
    _commonTextFinderInit<R = void>(): R;
    statusString<R = cocoa.NSString>(): R;
    setStatusString<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSTextFinderBarTextFieldCell>(): R;
      new: <R = NSTextFinderBarTextFieldCell>() => R;
    }
  }
}

declare const NSTextFinderBarTextFieldCell: cocoa.classes.NSTextFinderBarTextFieldCell;
