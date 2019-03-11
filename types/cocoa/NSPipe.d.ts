/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPipe<T = any> extends cocoa.NSObject {
    _closeOnDealloc<R = void>(): R;
    fileHandleForWriting<R = cocoa.NSFileHandle>(): R;
    fileHandleForReading<R = cocoa.NSFileHandle>(): R;
  }
  namespace classes {
    export interface NSPipe<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPipe>(): R;
      new: <R = NSPipe>() => R;
      pipe<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSPipe: cocoa.classes.NSPipe;
