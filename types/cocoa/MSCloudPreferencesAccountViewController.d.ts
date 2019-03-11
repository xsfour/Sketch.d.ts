/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudPreferencesAccountViewController<T = any> extends cocoa.MSCloudPreferencesViewController {
    cxx_destruct<R = void>(): R;
    showAccountSettings<R = void, P0 = unknown>(_showAccountSettings: P0): R;
    attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = void>(_attemptRecoveryFromError: P0, _optionIndex: P1, _delegate: P2, _didRecoverSelector: P3, _contextInfo: P4): R;
    logout<R = void, P0 = unknown>(_logout: P0): R;
    updateUserData<R = void>(): R;
    loadUser<R = void>(): R;
    platformDidChangeNotification<R = void, P0 = unknown>(_platformDidChangeNotification: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    applicationDidBecomeActiveNotification<R = void, P0 = unknown>(_applicationDidBecomeActiveNotification: P0): R;
    user<R = cocoa.SCKUser>(): R;
    setUser<R = void, P0 = cocoa.SCKUser>(_v: P0): R;
    loading<R = boolean>(): R;
    setLoading<R = void, P0 = boolean>(_v: P0): R;
    errorLabel<R = cocoa.NSTextField>(): R;
    setErrorLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    progressIndicator<R = cocoa.NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    emailLabel<R = cocoa.NSTextField>(): R;
    setEmailLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    nameLabel<R = cocoa.NSTextField>(): R;
    setNameLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    avatarView<R = cocoa.MSCloudAvatarView>(): R;
    setAvatarView<R = void, P0 = cocoa.MSCloudAvatarView>(_v: P0): R;
    introLabel<R = cocoa.NSTextField>(): R;
    setIntroLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudPreferencesAccountViewController<T = any> extends cocoa.classes.MSCloudPreferencesViewController {
      alloc<R = MSCloudPreferencesAccountViewController>(): R;
      new: <R = MSCloudPreferencesAccountViewController>() => R;
    }
  }
}

declare const MSCloudPreferencesAccountViewController: cocoa.classes.MSCloudPreferencesAccountViewController;
