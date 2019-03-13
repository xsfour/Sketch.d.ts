/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBPrototypingLayoutConstraint<T = any> extends NSLayoutConstraint {}
  namespace classes {
    export interface NSIBPrototypingLayoutConstraint<T = any> extends NSLayoutConstraint {
      alloc<R = NSIBPrototypingLayoutConstraint>(): R;
      new: <R = NSIBPrototypingLayoutConstraint>() => R;
      classFallbacksForKeyedArchiver<R = unknown>(): R;
    }
  }
}

declare const NSIBPrototypingLayoutConstraint: cocoa.classes.NSIBPrototypingLayoutConstraint;
