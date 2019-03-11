/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserDefaultsController<T = any> extends cocoa.NSController {
    _setSharedUserDefaultsControllerProxy<R = void, P0 = boolean>(__setSharedUserDefaultsControllerProxy: P0): R;
    _isSharedUserDefaultsControllerProxy<R = boolean>(): R;
    revertToInitialValues<R = void, P0 = unknown>(_revertToInitialValues: P0): R;
    save<R = void, P0 = unknown>(_save: P0): R;
    _executeSave_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeSave: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    revert<R = void, P0 = unknown>(_revert: P0): R;
    _applyAllValuesFromValueBuffer<R = void>(): R;
    _applyValue_forKey_registrationDomain<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__applyValue: P0, _forKey: P1, _registrationDomain: P2): R;
    _valueBuffer<R = unknown>(): R;
    _setDefaults<R = void, P0 = unknown>(__setDefaults: P0): R;
    description<R = unknown>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    initWithDefaults_initialValues<R = unknown, P0 = unknown, P1 = unknown>(_initWithDefaults: P0, _initialValues: P1): R;
    values<R = unknown>(): R;
    hasUnappliedChanges<R = boolean>(): R;
    appliesImmediately<R = boolean>(): R;
    setAppliesImmediately<R = void, P0 = boolean>(_v: P0): R;
    initialValues<R = cocoa.NSDictionary>(): R;
    setInitialValues<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    defaults<R = cocoa.NSUserDefaults>(): R;
  }
  namespace classes {
    export interface NSUserDefaultsController<T = any> extends cocoa.classes.NSController {
      alloc<R = NSUserDefaultsController>(): R;
      new: <R = NSUserDefaultsController>() => R;
      sharedUserDefaultsController<R = unknown>(): R;
    }
  }
}

declare const NSUserDefaultsController: cocoa.classes.NSUserDefaultsController;
