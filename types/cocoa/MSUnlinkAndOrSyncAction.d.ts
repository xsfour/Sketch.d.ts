/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnlinkAndOrSyncAction<T = any> extends MSBaseSharedObjectAction {}
  namespace classes {
    export interface MSUnlinkAndOrSyncAction<T = any> extends MSBaseSharedObjectAction {
      alloc<R = MSUnlinkAndOrSyncAction>(): R;
      new: <R = MSUnlinkAndOrSyncAction>() => R;
    }
  }
}

declare const MSUnlinkAndOrSyncAction: cocoa.classes.MSUnlinkAndOrSyncAction;
