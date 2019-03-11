/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowOnlineHelpAction<T = any> extends cocoa.MSAction {
    label<R = unknown>(): R;
    showOnlineHelp<R = void, P0 = unknown>(_showOnlineHelp: P0): R;
  }
  namespace classes {
    export interface MSShowOnlineHelpAction<T = any> extends cocoa.classes.MSAction {
      alloc<R = MSShowOnlineHelpAction>(): R;
      new: <R = MSShowOnlineHelpAction>() => R;
    }
  }
}

declare const MSShowOnlineHelpAction: cocoa.classes.MSShowOnlineHelpAction;
