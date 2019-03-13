/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockPredicate<T = any> extends NSPredicate {
    _predicateBlock<R = CDUnknownBlockType>(): R;
    predicateFormat<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace classes {
    export interface NSBlockPredicate<T = any> extends NSPredicate {
      alloc<R = NSBlockPredicate>(): R;
      new: <R = NSBlockPredicate>() => R;
    }
  }
}

declare const NSBlockPredicate: cocoa.classes.NSBlockPredicate;
