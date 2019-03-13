/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencesViewController<T = any> extends NSViewController {
    showAlert<R = void, P0 = unknown>(_showAlert: P0): R;
    popToRootViewController<R = void, P0 = unknown>(_popToRootViewController: P0): R;
    preferencePane<R = MSCloudPreferencePane>(): R;
  }
  namespace classes {
    export interface MSCloudPreferencesViewController<T = any> extends NSViewController {
      alloc<R = MSCloudPreferencesViewController>(): R;
      new: <R = MSCloudPreferencesViewController>() => R;
    }
  }
}

declare const MSCloudPreferencesViewController: cocoa.classes.MSCloudPreferencesViewController;
