/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewStateBinder<T = any> extends cocoa.NSBinder {
    _setValue_forBinding_errorFallbackMessage<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__setValue: P0, _forBinding: P1, _errorFallbackMessage: P2): R;
    _updateObject_observedController_observedKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(__updateObject: P0, _observedController: P1, _observedKeyPath: P2, _context: P3): R;
  }
  namespace classes {
    export interface NSViewStateBinder<T = any> extends cocoa.classes.NSBinder {
      alloc<R = NSViewStateBinder>(): R;
      new: <R = NSViewStateBinder>() => R;
    }
  }
}

declare const NSViewStateBinder: cocoa.classes.NSViewStateBinder;
