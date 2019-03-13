/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTextSearchFieldCell<T = any> extends NSSearchFieldCell {}
  namespace classes {
    export interface BCFilterTextSearchFieldCell<T = any> extends NSSearchFieldCell {
      alloc<R = BCFilterTextSearchFieldCell>(): R;
      new: <R = BCFilterTextSearchFieldCell>() => R;
    }
  }
}

declare const BCFilterTextSearchFieldCell: cocoa.classes.BCFilterTextSearchFieldCell;
