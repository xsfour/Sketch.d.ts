/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenPluginPreferencesAction<T = any> extends cocoa.MSAction {
    label<R = unknown>(): R;
    openPluginPreferences<R = void, P0 = unknown>(_openPluginPreferences: P0): R;
  }
  namespace classes {
    export interface MSOpenPluginPreferencesAction<T = any> extends cocoa.classes.MSAction {
      alloc<R = MSOpenPluginPreferencesAction>(): R;
      new: <R = MSOpenPluginPreferencesAction>() => R;
    }
  }
}

declare const MSOpenPluginPreferencesAction: cocoa.classes.MSOpenPluginPreferencesAction;
