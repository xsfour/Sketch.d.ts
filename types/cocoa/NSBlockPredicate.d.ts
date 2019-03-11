/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockPredicate<T = any> extends cocoa.NSPredicate {
    _predicateBlock<R = cocoa.CDUnknownBlockType>(): R;
    predicateFormat<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace classes {
    export interface NSBlockPredicate<T = any> extends cocoa.classes.NSPredicate {
      alloc<R = NSBlockPredicate>(): R;
      new: <R = NSBlockPredicate>() => R;
    }
  }
}

declare const NSBlockPredicate: cocoa.classes.NSBlockPredicate;
