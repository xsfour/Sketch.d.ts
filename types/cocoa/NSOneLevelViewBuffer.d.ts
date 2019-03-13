/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOneLevelViewBuffer<T = any> extends NSViewBuffer {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSOneLevelViewBuffer<T = any> extends NSViewBuffer {
      alloc<R = NSOneLevelViewBuffer>(): R;
      new: <R = NSOneLevelViewBuffer>() => R;
    }
  }
}

declare const NSOneLevelViewBuffer: cocoa.classes.NSOneLevelViewBuffer;
