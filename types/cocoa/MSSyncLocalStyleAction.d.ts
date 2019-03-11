/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSyncLocalStyleAction<T = any> extends cocoa.MSUnlinkAndOrSyncAction {
    label<R = unknown>(): R;
    syncLocalSharedStyle<R = void, P0 = unknown>(_syncLocalSharedStyle: P0): R;
  }
  namespace classes {
    export interface MSSyncLocalStyleAction<T = any> extends cocoa.classes.MSUnlinkAndOrSyncAction {
      alloc<R = MSSyncLocalStyleAction>(): R;
      new: <R = MSSyncLocalStyleAction>() => R;
    }
  }
}

declare const MSSyncLocalStyleAction: cocoa.classes.MSSyncLocalStyleAction;
