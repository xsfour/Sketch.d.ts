/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarSearchFieldCell<T = any> extends cocoa.NSSearchFieldCell {
    statusStringFieldRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_statusStringFieldRectForBounds: P0): R;
    _searchFieldDoRecentPattern<R = void, P0 = unknown>(__searchFieldDoRecentPattern: P0): R;
    _commonTextFinderInit<R = void>(): R;
    statusString<R = cocoa.NSString>(): R;
    setStatusString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    recentAttributedSearchStrings<R = cocoa.NSArray>(): R;
    setRecentAttributedSearchStrings<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarSearchFieldCell<T = any> extends cocoa.classes.NSSearchFieldCell {
      alloc<R = NSTextFinderBarSearchFieldCell>(): R;
      new: <R = NSTextFinderBarSearchFieldCell>() => R;
    }
  }
}

declare const NSTextFinderBarSearchFieldCell: cocoa.classes.NSTextFinderBarSearchFieldCell;
