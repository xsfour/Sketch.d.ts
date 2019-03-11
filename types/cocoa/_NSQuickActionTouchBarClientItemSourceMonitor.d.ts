/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarClientItemSourceMonitor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    cancel<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    itemSource<R = cocoa._NSQuickActionItemSource>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarClientItemSourceMonitor<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSQuickActionTouchBarClientItemSourceMonitor>(): R;
      new: <R = _NSQuickActionTouchBarClientItemSourceMonitor>() => R;
      automaticallyNotifiesObserversOfItemSource<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
    }
  }
}
