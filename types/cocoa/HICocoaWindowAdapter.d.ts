/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HICocoaWindowAdapter<T = any> extends cocoa.NSWindow {
    _enableFlushWindowWithoutPerformingFlush<R = void>(): R;
    reconcileToCarbonWindowBounds<R = boolean>(): R;
    syncToViews<R = boolean>(): R;
    setSyncToViews<R = void>(): R;
    setHasShadow<R = void, P0 = boolean>(_setHasShadow: P0): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    windowRef<R = cocoa.OpaqueWindowPtr>(): R;
    sendSuperEvent<R = void, P0 = unknown>(_sendSuperEvent: P0): R;
    _requiresFlush<R = void>(): R;
    postFocusChangeEventToQueue<R = void, P0 = boolean>(_postFocusChangeEventToQueue: P0): R;
    makeFirstResponderFromCarbonFocus<R = boolean, P0 = unknown>(_makeFirstResponderFromCarbonFocus: P0): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    canHide<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    relinquishFocus<R = void>(): R;
    _setCarbonRendering<R = void, P0 = boolean>(__setCarbonRendering: P0): R;
    _carbonRendering<R = boolean>(): R;
    _setFocusing<R = void, P0 = boolean>(__setFocusing: P0): R;
    _focusing<R = boolean>(): R;
    _setDrawingContext<R = void, P0 = unknown>(__setDrawingContext: P0): R;
    _setDrawingHIView<R = void, P0 = boolean>(__setDrawingHIView: P0): R;
    _drawingHIView<R = boolean>(): R;
    _childKeyWindow<R = unknown>(): R;
    handleHICocoaViewEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleHICocoaViewEvent: P0, _callRef: P1): R;
    handleControlEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleControlEvent: P0, _callRef: P1): R;
    handleKeyboardEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleKeyboardEvent: P0, _callRef: P1): R;
    handleMouseEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleMouseEvent: P0, _callRef: P1): R;
    handleCocoaWindowEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleCocoaWindowEvent: P0, _callRef: P1): R;
    handleWindowEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleWindowEvent: P0, _callRef: P1): R;
    handleEvent_callRef<R = number, P0 = cocoa.OpaqueEventRef, P1 = cocoa.OpaqueEventHandlerCallRef>(_handleEvent: P0, _callRef: P1): R;
    initWithCarbonWindowRef<R = unknown, P0 = cocoa.OpaqueWindowPtr>(_initWithCarbonWindowRef: P0): R;
    cwFlags<R = number>(): R;
    setCwFlags<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface HICocoaWindowAdapter<T = any> extends cocoa.classes.NSWindow {
      alloc<R = HICocoaWindowAdapter>(): R;
      new: <R = HICocoaWindowAdapter>() => R;
    }
  }
}

declare const HICocoaWindowAdapter: cocoa.classes.HICocoaWindowAdapter;
