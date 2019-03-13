/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextFieldCell<T = any> extends NSTextFieldCell {
    statusStringFieldRectForBounds<R = CGRect, P0 = CGRect>(_statusStringFieldRectForBounds: P0): R;
    _commonTextFinderInit<R = void>(): R;
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = NSTextFinderBarTextFieldCell>(): R;
      new: <R = NSTextFinderBarTextFieldCell>() => R;
    }
  }
}

declare const NSTextFinderBarTextFieldCell: cocoa.classes.NSTextFinderBarTextFieldCell;
