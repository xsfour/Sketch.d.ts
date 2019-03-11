/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarPicker<T = any> extends cocoa.NSObject, cocoa.NSTouchBarDelegateProtocol, cocoa._NSQuickActionTouchBarCollectionViewControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    closeTouchBar<R = void>(): R;
    updateOrderedDataSources<R = void, P0 = unknown>(_updateOrderedDataSources: P0): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initWithDelegate_mode<R = unknown, P0 = unknown, P1 = number>(_initWithDelegate: P0, _mode: P1): R;
    touchBar<R = cocoa.NSTouchBar>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarPicker<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTouchBarDelegateProtocol, cocoa.classes._NSQuickActionTouchBarCollectionViewControllerDelegateProtocol {
      alloc<R = _NSQuickActionTouchBarPicker>(): R;
      new: <R = _NSQuickActionTouchBarPicker>() => R;
      automaticallyNotifiesObserversOfTouchBar<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
