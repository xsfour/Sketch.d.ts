/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceTheme<T = any> extends cocoa.NSObject {
    resolvedValue_forSymbolicConstant_inConstraint_containerView<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_resolvedValue: P0, _forSymbolicConstant: P1, _inConstraint: P2, _containerView: P3): R;
    name<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithFallbackTheme<R = unknown, P0 = unknown>(_initWithFallbackTheme: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceTheme<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSUserInterfaceTheme>(): R;
      new: <R = NSUserInterfaceTheme>() => R;
      aquaTheme<R = unknown>(): R;
    }
  }
}

declare const NSUserInterfaceTheme: cocoa.classes.NSUserInterfaceTheme;
