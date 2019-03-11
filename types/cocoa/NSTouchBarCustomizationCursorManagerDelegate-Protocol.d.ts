/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationCursorManagerDelegateProtocol<T = any> {
    cursorManagerDidExitTouchBar_atScreenLocation_cancelled<R = void, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint, P2 = boolean>(_cursorManagerDidExitTouchBar: P0, _atScreenLocation: P1, _cancelled: P2): R;
    cursorManager_didMoveTouchBarCursorToPoint_withDelta_mouseIsDown<R = cocoa.CGPoint, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint, P2 = cocoa.CGSize, P3 = boolean>(_cursorManager: P0, _didMoveTouchBarCursorToPoint: P1, _withDelta: P2, _mouseIsDown: P3): R;
    cursorManager_didMouseUpInTouchBarAtPoint<R = cocoa.CGPoint, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint>(_cursorManager: P0, _didMouseUpInTouchBarAtPoint: P1): R;
    cursorManager_didMouseDownInTouchBarAtPoint<R = void, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint>(_cursorManager: P0, _didMouseDownInTouchBarAtPoint: P1): R;
    cursorManager_didEnterTouchBarAtPoint_mouseIsDown<R = cocoa.CGPoint, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint, P2 = boolean>(_cursorManager: P0, _didEnterTouchBarAtPoint: P1, _mouseIsDown: P2): R;
    cursorManager_shouldEnterTouchBarAtPoint_isDragging<R = boolean, P0 = cocoa.NSTouchBarCustomizationCursorManager, P1 = cocoa.CGPoint, P2 = boolean>(_cursorManager: P0, _shouldEnterTouchBarAtPoint: P1, _isDragging: P2): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationCursorManagerDelegateProtocol<T = any> {  }
  }
}

declare const NSTouchBarCustomizationCursorManagerDelegateProtocol: cocoa.classes.NSTouchBarCustomizationCursorManagerDelegateProtocol;
