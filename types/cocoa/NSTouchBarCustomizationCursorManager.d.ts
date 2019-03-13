/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationCursorManager<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    _exitTouchBarWithDFRLocation_cancelled<R = void, P0 = CGPoint, P1 = boolean>(__exitTouchBarWithDFRLocation: P0, _cancelled: P1): R;
    _enterTouchBarWithDisplayLocation_mouseIsDown<R = void, P0 = CGPoint, P1 = boolean>(__enterTouchBarWithDisplayLocation: P0, _mouseIsDown: P1): R;
    updateWithEvent<R = boolean, P0 = unknown>(_updateWithEvent: P0): R;
    stopTrackingCursor<R = void>(): R;
    beginTrackingCursor<R = void>(): R;
    dealloc<R = void>(): R;
    initWithAssociatedDisplay<R = unknown, P0 = number>(_initWithAssociatedDisplay: P0): R;
    cursorIsInTouchBar<R = boolean>(): R;
    delegate<R = NSTouchBarCustomizationCursorManagerDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarCustomizationCursorManagerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationCursorManager<T = any> extends NSObject {
      alloc<R = NSTouchBarCustomizationCursorManager>(): R;
      new: <R = NSTouchBarCustomizationCursorManager>() => R;
      _showCursor<R = void>(): R;
      _hideCursor<R = void>(): R;
    }
  }
}

declare const NSTouchBarCustomizationCursorManager: cocoa.classes.NSTouchBarCustomizationCursorManager;
