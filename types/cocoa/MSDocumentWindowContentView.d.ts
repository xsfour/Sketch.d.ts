/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWindowContentView<T = any> extends NSView {}
  namespace classes {
    export interface MSDocumentWindowContentView<T = any> extends NSView {
      alloc<R = MSDocumentWindowContentView>(): R;
      new: <R = MSDocumentWindowContentView>() => R;
    }
  }
}

declare const MSDocumentWindowContentView: cocoa.classes.MSDocumentWindowContentView;
