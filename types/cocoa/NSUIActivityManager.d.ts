/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityManager<T = any> extends cocoa.NSObject, cocoa.NSUserActivityDelegateProtocol {
    continueUserActivity<R = void, P0 = unknown>(_continueUserActivity: P0): R;
    continueUserActivityWithUUID_type<R = void, P0 = unknown, P1 = unknown>(_continueUserActivityWithUUID: P0, _type: P1): R;
    _willFetchUserActivityWithType_progress<R = boolean, P0 = unknown, P1 = unknown>(__willFetchUserActivityWithType: P0, _progress: P1): R;
    _didFailToFetchUserActivityWithType_error<R = void, P0 = unknown, P1 = unknown>(__didFailToFetchUserActivityWithType: P0, _error: P1): R;
    _continueUserActivity<R = void, P0 = unknown>(__continueUserActivity: P0): R;
    _continueUserActivityAutomatically<R = void, P0 = unknown>(__continueUserActivityAutomatically: P0): R;
    _restoreProviders_withUserActivity<R = void, P0 = unknown, P1 = unknown>(__restoreProviders: P0, _withUserActivity: P1): R;
    infoForProvider<R = unknown, P0 = unknown>(_infoForProvider: P0): R;
    addProvider_toUserActivity_withSetter<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_addProvider: P0, _toUserActivity: P1, _withSetter: P2): R;
    queue_addProvider_toUserActivity<R = void, P0 = unknown, P1 = unknown>(_queue_addProvider: P0, _toUserActivity: P1): R;
    removeProviderFromUserActivity<R = void, P0 = unknown>(_removeProviderFromUserActivity: P0): R;
    queue_removeProviderFromUserActivity<R = unknown, P0 = unknown>(_queue_removeProviderFromUserActivity: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSUIActivityManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSUserActivityDelegateProtocol {
      alloc<R = NSUIActivityManager>(): R;
      new: <R = NSUIActivityManager>() => R;
      sharedManager<R = unknown>(): R;
    }
  }
}

declare const NSUIActivityManager: cocoa.classes.NSUIActivityManager;
