/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenCloudPreferencesAction<T = any> extends MSAction {
    label<R = unknown>(): R;
    openCloudPreferences<R = void, P0 = unknown>(_openCloudPreferences: P0): R;
  }
  namespace classes {
    export interface MSOpenCloudPreferencesAction<T = any> extends MSAction {
      alloc<R = MSOpenCloudPreferencesAction>(): R;
      new: <R = MSOpenCloudPreferencesAction>() => R;
    }
  }
}

declare const MSOpenCloudPreferencesAction: cocoa.classes.MSOpenCloudPreferencesAction;
