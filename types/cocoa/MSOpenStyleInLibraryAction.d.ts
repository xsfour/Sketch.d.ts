/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenStyleInLibraryAction<T = any> extends cocoa.MSOpenInLibraryAction {
    label<R = unknown>(): R;
    openLibraryForStyles<R = void, P0 = unknown>(_openLibraryForStyles: P0): R;
  }
  namespace classes {
    export interface MSOpenStyleInLibraryAction<T = any> extends cocoa.classes.MSOpenInLibraryAction {
      alloc<R = MSOpenStyleInLibraryAction>(): R;
      new: <R = MSOpenStyleInLibraryAction>() => R;
    }
  }
}

declare const MSOpenStyleInLibraryAction: cocoa.classes.MSOpenStyleInLibraryAction;
