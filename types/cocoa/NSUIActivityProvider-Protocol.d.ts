/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    _cleanUpUserActivity<R = void>(): R;
    _didRestoreUserActivity<R = void, P0 = cocoa.NSUserActivity>(__didRestoreUserActivity: P0): R;
    _becomeCurrentUserActivityIfNecessary<R = void>(): R;
    userActivityWasContinued<R = void, P0 = cocoa.NSUserActivity>(_userActivityWasContinued: P0): R;
    restoreUserActivityState<R = void, P0 = cocoa.NSUserActivity>(_restoreUserActivityState: P0): R;
    updateUserActivityState<R = void, P0 = cocoa.NSUserActivity>(_updateUserActivityState: P0): R;
    userActivity<R = cocoa.NSUserActivity>(): R;
    setUserActivity<R = void, P0 = cocoa.NSUserActivity>(_v: P0): R;
  }
  namespace classes {
    export interface NSUIActivityProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSUIActivityProviderProtocol: cocoa.classes.NSUIActivityProviderProtocol;
