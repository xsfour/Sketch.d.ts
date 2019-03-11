/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIArchiver<T = any> extends cocoa.NSCoder, cocoa.NSKeyedArchiverDelegateProtocol {
    finishEncodingWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_finishEncodingWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    initWithQueue<R = unknown, P0 = unknown>(_initWithQueue: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPersistentUIArchiver<T = any> extends cocoa.classes.NSCoder, cocoa.classes.NSKeyedArchiverDelegateProtocol {
      alloc<R = NSPersistentUIArchiver>(): R;
      new: <R = NSPersistentUIArchiver>() => R;
    }
  }
}

declare const NSPersistentUIArchiver: cocoa.classes.NSPersistentUIArchiver;
