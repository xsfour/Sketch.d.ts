/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSilentCheckForUpdatesAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    updateController<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSilentCheckForUpdatesAction<T = any> extends MSAction {
      alloc<R = MSSilentCheckForUpdatesAction>(): R;
      new: <R = MSSilentCheckForUpdatesAction>() => R;
    }
  }
}

declare const MSSilentCheckForUpdatesAction: cocoa.classes.MSSilentCheckForUpdatesAction;
