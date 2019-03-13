/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCheckForUpdatesAction<T = any> extends MSSilentCheckForUpdatesAction {
    checkForUpdates<R = void, P0 = unknown>(_checkForUpdates: P0): R;
  }
  namespace classes {
    export interface MSCheckForUpdatesAction<T = any> extends MSSilentCheckForUpdatesAction {
      alloc<R = MSCheckForUpdatesAction>(): R;
      new: <R = MSCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSCheckForUpdatesAction: cocoa.classes.MSCheckForUpdatesAction;
