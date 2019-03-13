/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTruePredicate<T = any> extends NSPredicate {
    predicateFormat<R = unknown>(): R;
    hash<R = number>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTruePredicate<T = any> extends NSPredicate {
      alloc<R = NSTruePredicate>(): R;
      new: <R = NSTruePredicate>() => R;
      defaultInstance<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSTruePredicate: cocoa.classes.NSTruePredicate;
