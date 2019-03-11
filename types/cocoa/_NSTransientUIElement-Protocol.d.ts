/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTransientUIElementProtocol<T = any> extends cocoa.NSObjectProtocol {
    _closeForToolbarPresentingOnWindow<R = void, P0 = cocoa.NSWindow>(__closeForToolbarPresentingOnWindow: P0): R;
    _closeForSheetPresentingOnWindow<R = void, P0 = cocoa.NSWindow>(__closeForSheetPresentingOnWindow: P0): R;
    _closeForKeyDownEvent<R = void, P0 = cocoa.NSEvent>(__closeForKeyDownEvent: P0): R;
    _closeForNonDragOrResizeClickWithEvent<R = void, P0 = cocoa.NSEvent>(__closeForNonDragOrResizeClickWithEvent: P0): R;
    _isAffectedByEventsInWindow<R = boolean, P0 = cocoa.NSWindow>(__isAffectedByEventsInWindow: P0): R;
    _transientBehavior<R = number>(): R;
    _registeredTransientBehavior<R = number>(): R;
    set_registeredTransientBehavior<R = void, P0 = number>(_v: P0): R;
    detached<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSTransientUIElementProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
