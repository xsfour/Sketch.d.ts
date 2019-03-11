/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarController<T = any> extends cocoa.NSObject, cocoa._NSQuickActionTouchBarPickerDelegateProtocol, cocoa._NSQuickActionProviderObserverProtocol {
    cxx_destruct<R = void>(): R;
    dismissPopover<R = void>(): R;
    showPopover<R = void>(): R;
    enableQuickActionsWithIdentifiers<R = void, P0 = unknown>(_enableQuickActionsWithIdentifiers: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _workflowsBar<R = unknown>(): R;
    _popoverPicker<R = unknown>(): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    dealloc<R = void>(): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    touchBarIsShowing<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarController<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSQuickActionTouchBarPickerDelegateProtocol, cocoa.classes._NSQuickActionProviderObserverProtocol {
      alloc<R = _NSQuickActionTouchBarController>(): R;
      new: <R = _NSQuickActionTouchBarController>() => R;
      keyPathsForValuesAffectingTouchBarIsShowing<R = unknown>(): R;
      automaticallyNotifiesObserversOf_workflowsBar<R = boolean>(): R;
      automaticallyNotifiesObserversOf_popoverPicker<R = boolean>(): R;
      automaticallyNotifiesObserversOfTouchBarIsShowing<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
