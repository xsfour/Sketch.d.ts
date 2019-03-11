/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewWindowBackingStoreBuffer<T = any> extends cocoa.NSViewBuffer {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSViewWindowBackingStoreBuffer<T = any> extends cocoa.classes.NSViewBuffer {
      alloc<R = NSViewWindowBackingStoreBuffer>(): R;
      new: <R = NSViewWindowBackingStoreBuffer>() => R;
    }
  }
}

declare const NSViewWindowBackingStoreBuffer: cocoa.classes.NSViewWindowBackingStoreBuffer;
