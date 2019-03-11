/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFontSearchField<T = any> extends cocoa.NSSearchField, cocoa.NSTextViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    moveFocusToTableView<R = void>(): R;
    searchResults<R = cocoa.NSTableView>(): R;
    setSearchResults<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface BCFontSearchField<T = any> extends cocoa.classes.NSSearchField, cocoa.classes.NSTextViewDelegateProtocol {
      alloc<R = BCFontSearchField>(): R;
      new: <R = BCFontSearchField>() => R;
    }
  }
}

declare const BCFontSearchField: cocoa.classes.BCFontSearchField;
