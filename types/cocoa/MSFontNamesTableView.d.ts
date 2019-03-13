/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontNamesTableView<T = any> extends NSTableView {
    searchField<R = NSSearchField>(): R;
    setSearchField<R = void, P0 = NSSearchField>(_v: P0): R;
  }
  namespace classes {
    export interface MSFontNamesTableView<T = any> extends NSTableView {
      alloc<R = MSFontNamesTableView>(): R;
      new: <R = MSFontNamesTableView>() => R;
    }
  }
}

declare const MSFontNamesTableView: cocoa.classes.MSFontNamesTableView;
