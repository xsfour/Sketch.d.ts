/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectParameterBinder<T = any> extends NSBinder {
    _updateObject_observedController_observedKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(__updateObject: P0, _observedController: P1, _observedKeyPath: P2, _context: P3): R;
  }
  namespace classes {
    export interface NSObjectParameterBinder<T = any> extends NSBinder {
      alloc<R = NSObjectParameterBinder>(): R;
      new: <R = NSObjectParameterBinder>() => R;
    }
  }
}

declare const NSObjectParameterBinder: cocoa.classes.NSObjectParameterBinder;
