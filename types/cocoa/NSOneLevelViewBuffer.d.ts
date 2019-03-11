/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOneLevelViewBuffer<T = any> extends cocoa.NSViewBuffer {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSOneLevelViewBuffer<T = any> extends cocoa.classes.NSViewBuffer {
      alloc<R = NSOneLevelViewBuffer>(): R;
      new: <R = NSOneLevelViewBuffer>() => R;
    }
  }
}

declare const NSOneLevelViewBuffer: cocoa.classes.NSOneLevelViewBuffer;
