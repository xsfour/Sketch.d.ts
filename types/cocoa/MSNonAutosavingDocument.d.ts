/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNonAutosavingDocument<T = any> extends cocoa.MSDocument {
    fileType<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNonAutosavingDocument<T = any> extends cocoa.classes.MSDocument {
      alloc<R = MSNonAutosavingDocument>(): R;
      new: <R = MSNonAutosavingDocument>() => R;
    }
  }
}

declare const MSNonAutosavingDocument: cocoa.classes.MSNonAutosavingDocument;
