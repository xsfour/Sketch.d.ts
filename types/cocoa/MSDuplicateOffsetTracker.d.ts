/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDuplicateOffsetTracker<T = any> extends NSObject {
    offset<R = number>(): R;
    increment<R = void>(): R;
    resetToInitialOffset<R = void>(): R;
    reset<R = void>(): R;
  }
  namespace classes {
    export interface MSDuplicateOffsetTracker<T = any> extends NSObject {
      alloc<R = MSDuplicateOffsetTracker>(): R;
      new: <R = MSDuplicateOffsetTracker>() => R;
    }
  }
}

declare const MSDuplicateOffsetTracker: cocoa.classes.MSDuplicateOffsetTracker;
