/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentConflictNonTableView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDocumentConflictNonTableView<T = any> extends NSView {
      alloc<R = _NSDocumentConflictNonTableView>(): R;
      new: <R = _NSDocumentConflictNonTableView>() => R;
    }
  }
}
