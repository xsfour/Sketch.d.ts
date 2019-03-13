/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNonStandardBehaviorEntry<T = any> extends NSObject {
    dealloc<R = void>(): R;
    actualValue<R = NSValue>(): R;
    setActualValue<R = void, P0 = NSValue>(_v: P0): R;
    standardValue<R = NSValue>(): R;
    setStandardValue<R = void, P0 = NSValue>(_v: P0): R;
    reason<R = number>(): R;
    setReason<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSNonStandardBehaviorEntry<T = any> extends NSObject {
      alloc<R = NSNonStandardBehaviorEntry>(): R;
      new: <R = NSNonStandardBehaviorEntry>() => R;
    }
  }
}

declare const NSNonStandardBehaviorEntry: cocoa.classes.NSNonStandardBehaviorEntry;
