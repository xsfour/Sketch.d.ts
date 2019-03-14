/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNestedScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView {
    updateDocumentView<R = void>(): R;
  }
  namespace MSNestedScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = MSNestedScrollView>(): R;
      new: <R = MSNestedScrollView>() => R;
    }
  }
}

declare const MSNestedScrollView: cocoa.MSNestedScrollView.CLASS;
