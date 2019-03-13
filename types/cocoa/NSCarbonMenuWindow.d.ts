/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonMenuWindow<T = any> extends NSCarbonWindow {
    _enableFlushWindowWithoutPerformingFlush<R = void>(): R;
    _recursivelyPropagateCocoaDirtyRectsToCarbonForHIView<R = void, P0 = OpaqueControlRef>(__recursivelyPropagateCocoaDirtyRectsToCarbonForHIView: P0): R;
    _recursivelyPropagateCocoaDirtyRectsForView_toCarbonView<R = void, P0 = unknown, P1 = OpaqueControlRef>(__recursivelyPropagateCocoaDirtyRectsForView: P0, _toCarbonView: P1): R;
    _propagateCocoaDirtyRectsForView_toCarbonView<R = void, P0 = unknown, P1 = OpaqueControlRef>(__propagateCocoaDirtyRectsForView: P0, _toCarbonView: P1): R;
    _carbonWindowRefDidDraw<R = void>(): R;
    _carbonWindowRefWillDraw<R = void>(): R;
    _carbonWindowRefChangedVisibilityTo<R = void, P0 = boolean>(__carbonWindowRefChangedVisibilityTo: P0): R;
    _restorePreviousKeyWindowFromSavedProperties<R = void>(): R;
    _substituteKeyWindowForAction<R = unknown, P0 = string>(__substituteKeyWindowForAction: P0): R;
    _findKeyWindowToRestoreFromSavedProperties<R = unknown>(): R;
    _trackingAreaInfoForTrackingRectTag<R = void, P0 = number>(__trackingAreaInfoForTrackingRectTag: P0): R;
    _setLastHitView<R = void, P0 = unknown>(__setLastHitView: P0): R;
    _clearPreviousKeyWindowProperties<R = void>(): R;
    _recordPreviousKeyWindowProperties<R = void>(): R;
    _sendManufacturedCursorUpdateEventForTrackingRectEvent<R = boolean, P0 = unknown>(__sendManufacturedCursorUpdateEventForTrackingRectEvent: P0): R;
    _sendManufacturedTrackingAreaEventsForMouseDraggedEvent_forceExit<R = void, P0 = unknown, P1 = boolean>(__sendManufacturedTrackingAreaEventsForMouseDraggedEvent: P0, _forceExit: P1): R;
    _handleKeyEvent<R = boolean, P0 = unknown>(__handleKeyEvent: P0): R;
    setAlphaValue<R = void, P0 = number>(_setAlphaValue: P0): R;
  }
  namespace classes {
    export interface NSCarbonMenuWindow<T = any> extends NSCarbonWindow {
      alloc<R = NSCarbonMenuWindow>(): R;
      new: <R = NSCarbonMenuWindow>() => R;
    }
  }
}

declare const NSCarbonMenuWindow: cocoa.classes.NSCarbonMenuWindow;
