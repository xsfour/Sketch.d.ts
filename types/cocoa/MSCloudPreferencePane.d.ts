/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencePane<T = any> extends MSPreferencePane {
    cloudURLDidOpenNotification<R = void, P0 = unknown>(_cloudURLDidOpenNotification: P0): R;
    applicationDidOpenURL<R = void, P0 = unknown>(_applicationDidOpenURL: P0): R;
    platformDidChangeNotification<R = void, P0 = unknown>(_platformDidChangeNotification: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    fixFirstResponder<R = void>(): R;
    updateWindowFrame<R = void>(): R;
    showRootViewController<R = void>(): R;
    showAccountViewController<R = void>(): R;
    showIntroViewController<R = void>(): R;
    showCloudViewControllerOfClass<R = void, P0 = unknown>(_showCloudViewControllerOfClass: P0): R;
    currentViewController<R = MSCloudPreferencesViewController>(): R;
    setCurrentViewController<R = void, P0 = MSCloudPreferencesViewController>(_v: P0): R;
    cloudStoryboard<R = NSStoryboard>(): R;
    setCloudStoryboard<R = void, P0 = NSStoryboard>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudPreferencePane<T = any> extends MSPreferencePane {
      alloc<R = MSCloudPreferencePane>(): R;
      new: <R = MSCloudPreferencePane>() => R;
      cloudLoginOverrideBehavior<R = number>(): R;
      cloudLoginSwitchPlatformBehavior<R = number>(): R;
      loginWithURLParameters<R = void, P0 = unknown>(_loginWithURLParameters: P0): R;
    }
  }
}

declare const MSCloudPreferencePane: cocoa.classes.MSCloudPreferencePane;
