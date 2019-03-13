/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencesIntroViewController<T = any> extends MSCloudPreferencesViewController, MSCloudLoginWindowControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    cloudEnvironmentDidChangeNotification<R = void, P0 = unknown>(_cloudEnvironmentDidChangeNotification: P0): R;
    updateTitleLabelValue<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    dismissLoginWindowController<R = void, P0 = unknown>(_dismissLoginWindowController: P0): R;
    login<R = void, P0 = unknown>(_login: P0): R;
    loginToBrowser<R = void, P0 = unknown>(_loginToBrowser: P0): R;
    signup<R = void, P0 = unknown>(_signup: P0): R;
    loginButton<R = NSButton>(): R;
    setLoginButton<R = void, P0 = NSButton>(_v: P0): R;
    progressIndicator<R = NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    learnMoreButton<R = NSButton>(): R;
    setLearnMoreButton<R = void, P0 = NSButton>(_v: P0): R;
    descriptionLabel<R = NSTextField>(): R;
    setDescriptionLabel<R = void, P0 = NSTextField>(_v: P0): R;
    titleLabel<R = NSTextField>(): R;
    setTitleLabel<R = void, P0 = NSTextField>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCloudPreferencesIntroViewController<T = any> extends MSCloudPreferencesViewController, MSCloudLoginWindowControllerDelegateProtocol {
      alloc<R = MSCloudPreferencesIntroViewController>(): R;
      new: <R = MSCloudPreferencesIntroViewController>() => R;
    }
  }
}

declare const MSCloudPreferencesIntroViewController: cocoa.classes.MSCloudPreferencesIntroViewController;
