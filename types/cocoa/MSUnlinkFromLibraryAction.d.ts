/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkFromLibraryAction<T = any> extends MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    unlinkFromLibrary<R = void, P0 = unknown>(_unlinkFromLibrary: P0): R;
  }
  namespace classes {
    export interface MSUnlinkFromLibraryAction<T = any> extends MSUnlinkAndOrSyncAction {
      alloc<R = MSUnlinkFromLibraryAction>(): R;
      new: <R = MSUnlinkFromLibraryAction>() => R;
    }
  }
}

declare const MSUnlinkFromLibraryAction: cocoa.classes.MSUnlinkFromLibraryAction;
