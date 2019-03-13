/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteOrderedSetChange<T = any> extends NSOrderedSetChange {
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSConcreteOrderedSetChange<T = any> extends NSOrderedSetChange {
      alloc<R = NSConcreteOrderedSetChange>(): R;
      new: <R = NSConcreteOrderedSetChange>() => R;
    }
  }
}

declare const NSConcreteOrderedSetChange: cocoa.classes.NSConcreteOrderedSetChange;
