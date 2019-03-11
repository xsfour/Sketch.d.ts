/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontNamesTableView<T = any> extends cocoa.NSTableView {
    searchField<R = cocoa.NSSearchField>(): R;
    setSearchField<R = void, P0 = cocoa.NSSearchField>(_v: P0): R;
  }
  namespace classes {
    export interface MSFontNamesTableView<T = any> extends cocoa.classes.NSTableView {
      alloc<R = MSFontNamesTableView>(): R;
      new: <R = MSFontNamesTableView>() => R;
    }
  }
}

declare const MSFontNamesTableView: cocoa.classes.MSFontNamesTableView;
