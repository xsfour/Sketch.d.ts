/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePipe<T = any> extends cocoa.NSPipe {
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    fileHandleForWriting<R = unknown>(): R;
    fileHandleForReading<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcretePipe<T = any> extends cocoa.classes.NSPipe {
      alloc<R = NSConcretePipe>(): R;
      new: <R = NSConcretePipe>() => R;
    }
  }
}

declare const NSConcretePipe: cocoa.classes.NSConcretePipe;
