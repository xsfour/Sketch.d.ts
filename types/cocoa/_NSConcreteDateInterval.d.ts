/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteDateInterval<T = any> extends cocoa.NSDateInterval {
    duration<R = number>(): R;
    startDate<R = unknown>(): R;
    endDate<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSConcreteDateInterval<T = any> extends cocoa.classes.NSDateInterval {
      alloc<R = _NSConcreteDateInterval>(): R;
      new: <R = _NSConcreteDateInterval>() => R;
    }
  }
}
