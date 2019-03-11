/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenInLibraryAction<T = any> extends cocoa.MSDocumentAction {
    foreignObjects<R = cocoa.NSSet>(): R;
  }
  namespace classes {
    export interface MSOpenInLibraryAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSOpenInLibraryAction>(): R;
      new: <R = MSOpenInLibraryAction>() => R;
    }
  }
}

declare const MSOpenInLibraryAction: cocoa.classes.MSOpenInLibraryAction;
