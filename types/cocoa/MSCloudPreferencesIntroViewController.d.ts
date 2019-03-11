/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencesIntroViewController<T = any> extends cocoa.MSCloudPreferencesViewController, cocoa.MSCloudLoginWindowControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    cloudEnvironmentDidChangeNotification<R = void, P0 = unknown>(_cloudEnvironmentDidChangeNotification: P0): R;
    updateTitleLabelValue<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    dismissLoginWindowController<R = void, P0 = unknown>(_dismissLoginWindowController: P0): R;
    login<R = void, P0 = unknown>(_login: P0): R;
    loginToBrowser<R = void, P0 = unknown>(_loginToBrowser: P0): R;
    signup<R = void, P0 = unknown>(_signup: P0): R;
    loginButton<R = cocoa.NSButton>(): R;
    setLoginButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    progressIndicator<R = cocoa.NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    learnMoreButton<R = cocoa.NSButton>(): R;
    setLearnMoreButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    descriptionLabel<R = cocoa.NSTextField>(): R;
    setDescriptionLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    titleLabel<R = cocoa.NSTextField>(): R;
    setTitleLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCloudPreferencesIntroViewController<T = any> extends cocoa.classes.MSCloudPreferencesViewController, cocoa.classes.MSCloudLoginWindowControllerDelegateProtocol {
      alloc<R = MSCloudPreferencesIntroViewController>(): R;
      new: <R = MSCloudPreferencesIntroViewController>() => R;
    }
  }
}

declare const MSCloudPreferencesIntroViewController: cocoa.classes.MSCloudPreferencesIntroViewController;
