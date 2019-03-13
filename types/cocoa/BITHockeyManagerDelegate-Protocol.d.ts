/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BITHockeyManagerDelegateProtocol<T = any> extends NSObjectProtocol, BITCrashManagerDelegateProtocol {
    userEmailForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userEmailForHockeyManager: P0, _componentManager: P1): R;
    userNameForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userNameForHockeyManager: P0, _componentManager: P1): R;
    userIDForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userIDForHockeyManager: P0, _componentManager: P1): R;
  }
  namespace classes {
    export interface BITHockeyManagerDelegateProtocol<T = any> extends NSObjectProtocol, BITCrashManagerDelegateProtocol {  }
  }
}
