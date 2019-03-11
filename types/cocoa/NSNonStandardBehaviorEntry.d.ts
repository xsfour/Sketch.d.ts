/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNonStandardBehaviorEntry<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    actualValue<R = cocoa.NSValue>(): R;
    setActualValue<R = void, P0 = cocoa.NSValue>(_v: P0): R;
    standardValue<R = cocoa.NSValue>(): R;
    setStandardValue<R = void, P0 = cocoa.NSValue>(_v: P0): R;
    reason<R = number>(): R;
    setReason<R = void, P0 = number>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSNonStandardBehaviorEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSNonStandardBehaviorEntry>(): R;
      new: <R = NSNonStandardBehaviorEntry>() => R;
    }
  }
}

declare const NSNonStandardBehaviorEntry: cocoa.classes.NSNonStandardBehaviorEntry;
