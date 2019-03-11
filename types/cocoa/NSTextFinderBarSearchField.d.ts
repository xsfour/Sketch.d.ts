/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarSearchField<T = any> extends cocoa.NSSearchField {
    _mouseDownEventIsInSearchButton<R = boolean, P0 = unknown>(__mouseDownEventIsInSearchButton: P0): R;
    recentAttributedSearchStrings<R = cocoa.NSArray>(): R;
    setRecentAttributedSearchStrings<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    statusString<R = cocoa.NSString>(): R;
    setStatusString<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarSearchField<T = any> extends cocoa.classes.NSSearchField {
      alloc<R = NSTextFinderBarSearchField>(): R;
      new: <R = NSTextFinderBarSearchField>() => R;
    }
  }
}

declare const NSTextFinderBarSearchField: cocoa.classes.NSTextFinderBarSearchField;
