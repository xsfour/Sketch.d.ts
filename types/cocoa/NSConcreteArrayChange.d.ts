/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteArrayChange<T = any> extends cocoa.NSArrayChange {
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSConcreteArrayChange<T = any> extends cocoa.classes.NSArrayChange {
      alloc<R = NSConcreteArrayChange>(): R;
      new: <R = NSConcreteArrayChange>() => R;
    }
  }
}

declare const NSConcreteArrayChange: cocoa.classes.NSConcreteArrayChange;
