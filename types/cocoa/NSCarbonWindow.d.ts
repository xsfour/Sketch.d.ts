/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindow<T = any> extends NSWindow {
    _focusRelinquished<R = number>(): R;
    _focusAcquired<R = number>(): R;
    _removeReferencesToCarbonWindowRef<R = void>(): R;
    _setForceNotKeyWindowForInputContext<R = void, P0 = boolean>(__setForceNotKeyWindowForInputContext: P0): R;
    handleMouseDownEvent_at_inPart_withMods<R = number, P0 = OpaqueEventRef, P1 = Point, P2 = number, P3 = number>(_handleMouseDownEvent: P0, _at: P1, _inPart: P2, _withMods: P3): R;
    handleCarbonBoundsChange<R = void>(): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    clear<R = void, P0 = unknown>(_clear: P0): R;
    sendCarbonUpdateHICommandStatusEvent_withMenuRef_andMenuItemIndex<R = number, P0 = number, P1 = OpaqueMenuRef, P2 = number>(_sendCarbonUpdateHICommandStatusEvent: P0, _withMenuRef: P1, _andMenuItemIndex: P2): R;
    sendCarbonProcessHICommandEvent<R = void, P0 = number>(_sendCarbonProcessHICommandEvent: P0): R;
    carbonHICommandIDFromActionSelector<R = number, P0 = string>(_carbonHICommandIDFromActionSelector: P0): R;
    worksWhenModal<R = boolean>(): R;
    setHidesOnDeactivate<R = void, P0 = boolean>(_setHidesOnDeactivate: P0): R;
    setHasShadow<R = void, P0 = boolean>(_setHasShadow: P0): R;
    setContentView<R = void, P0 = unknown>(_setContentView: P0): R;
    _handleEventsTheCarbonWay<R = boolean>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    isExcludedFromWindowsMenu<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _postCarbonWindowActivateEvent_makeKeyWindow<R = void, P0 = boolean, P1 = boolean>(__postCarbonWindowActivateEvent: P0, _makeKeyWindow: P1): R;
    sendSuperEvent<R = void, P0 = unknown>(_sendSuperEvent: P0): R;
    reconcileToCarbonWindowBounds<R = boolean>(): R;
    carbonPlatformWindowBounds<R = CGRect>(): R;
    windowRef<R = OpaqueWindowPtr>(): R;
    _cleanup<R = void>(): R;
    initWithCarbonWindowRef_takingOwnership<R = unknown, P0 = OpaqueWindowPtr, P1 = boolean>(_initWithCarbonWindowRef: P0, _takingOwnership: P1): R;
    initWithCarbonWindowRef_takingOwnership_disableOrdering<R = unknown, P0 = OpaqueWindowPtr, P1 = boolean, P2 = boolean>(_initWithCarbonWindowRef: P0, _takingOwnership: P1, _disableOrdering: P2): R;
    cwFlags<R = number>(): R;
    setCwFlags<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCarbonWindow<T = any> extends NSWindow {
      alloc<R = NSCarbonWindow>(): R;
      new: <R = NSCarbonWindow>() => R;
      setWindowLevelOfWindowGroupForWindowRef_toLevel<R = void, P0 = OpaqueWindowPtr, P1 = number>(_setWindowLevelOfWindowGroupForWindowRef: P0, _toLevel: P1): R;
    }
  }
}

declare const NSCarbonWindow: cocoa.classes.NSCarbonWindow;
