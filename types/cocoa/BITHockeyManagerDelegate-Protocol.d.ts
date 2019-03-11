/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BITHockeyManagerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.BITCrashManagerDelegateProtocol {
    userEmailForHockeyManager_componentManager<R = cocoa.NSString, P0 = cocoa.BITHockeyManager, P1 = cocoa.BITHockeyBaseManager>(_userEmailForHockeyManager: P0, _componentManager: P1): R;
    userNameForHockeyManager_componentManager<R = cocoa.NSString, P0 = cocoa.BITHockeyManager, P1 = cocoa.BITHockeyBaseManager>(_userNameForHockeyManager: P0, _componentManager: P1): R;
    userIDForHockeyManager_componentManager<R = cocoa.NSString, P0 = cocoa.BITHockeyManager, P1 = cocoa.BITHockeyBaseManager>(_userIDForHockeyManager: P0, _componentManager: P1): R;
  }
  namespace classes {
    export interface BITHockeyManagerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.BITCrashManagerDelegateProtocol {  }
  }
}

declare const BITHockeyManagerDelegateProtocol: cocoa.classes.BITHockeyManagerDelegateProtocol;
