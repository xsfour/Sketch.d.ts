/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteSetChange<T = any> extends cocoa.NSSetChange {
    value<R = unknown>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSConcreteSetChange<T = any> extends cocoa.classes.NSSetChange {
      alloc<R = NSConcreteSetChange>(): R;
      new: <R = NSConcreteSetChange>() => R;
    }
  }
}

declare const NSConcreteSetChange: cocoa.classes.NSConcreteSetChange;
