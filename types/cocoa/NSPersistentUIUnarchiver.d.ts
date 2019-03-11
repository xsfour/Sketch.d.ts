/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIUnarchiver<T = any> extends cocoa.NSCoder {
    finishDecoding<R = void>(): R;
    dealloc<R = void>(): R;
    _subcoderWithValueForKey<R = unknown, P0 = unknown>(__subcoderWithValueForKey: P0): R;
    _unarchivers<R = cocoa.NSArray>(): R;
    set_unarchivers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIUnarchiver<T = any> extends cocoa.classes.NSCoder {
      alloc<R = NSPersistentUIUnarchiver>(): R;
      new: <R = NSPersistentUIUnarchiver>() => R;
    }
  }
}

declare const NSPersistentUIUnarchiver: cocoa.classes.NSPersistentUIUnarchiver;
