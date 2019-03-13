/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackButtonCell<T = any> extends NSButtonCell {
    highlightsBy<R = number>(): R;
    showsStateBy<R = number>(): R;
  }
  namespace classes {
    export interface MSBackButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSBackButtonCell>(): R;
      new: <R = MSBackButtonCell>() => R;
    }
  }
}

declare const MSBackButtonCell: cocoa.classes.MSBackButtonCell;
