/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkAndSyncFromLibraryAction<T = any> extends MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    unlinkAndSyncFromLibrary<R = void, P0 = unknown>(_unlinkAndSyncFromLibrary: P0): R;
  }
  namespace classes {
    export interface MSUnlinkAndSyncFromLibraryAction<T = any> extends MSUnlinkAndOrSyncAction {
      alloc<R = MSUnlinkAndSyncFromLibraryAction>(): R;
      new: <R = MSUnlinkAndSyncFromLibraryAction>() => R;
    }
  }
}

declare const MSUnlinkAndSyncFromLibraryAction: cocoa.classes.MSUnlinkAndSyncFromLibraryAction;
