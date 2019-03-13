/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsButtonAppearance<T = any> extends NSAppearance {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsButtonAppearance<T = any> extends NSAppearance {
      alloc<R = NSDocumentRevisionsButtonAppearance>(): R;
      new: <R = NSDocumentRevisionsButtonAppearance>() => R;
    }
  }
}

declare const NSDocumentRevisionsButtonAppearance: cocoa.classes.NSDocumentRevisionsButtonAppearance;
