/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNestedScrollView<T = any> extends NSScrollView {
    updateDocumentView<R = void>(): R;
  }
  namespace classes {
    export interface MSNestedScrollView<T = any> extends NSScrollView {
      alloc<R = MSNestedScrollView>(): R;
      new: <R = MSNestedScrollView>() => R;
    }
  }
}

declare const MSNestedScrollView: cocoa.classes.MSNestedScrollView;
