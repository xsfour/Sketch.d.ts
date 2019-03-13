/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenPreferencesAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    openPreferencesWindowWithPreferencePaneIdentifier<R = void, P0 = unknown>(_openPreferencesWindowWithPreferencePaneIdentifier: P0): R;
    openPreferences<R = void, P0 = unknown>(_openPreferences: P0): R;
  }
  namespace classes {
    export interface MSOpenPreferencesAction<T = any> extends MSAction {
      alloc<R = MSOpenPreferencesAction>(): R;
      new: <R = MSOpenPreferencesAction>() => R;
    }
  }
}

declare const MSOpenPreferencesAction: cocoa.classes.MSOpenPreferencesAction;
