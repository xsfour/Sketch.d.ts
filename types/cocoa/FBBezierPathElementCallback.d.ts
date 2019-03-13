/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierPathElementCallback<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    invoke<R = boolean, P0 = FBBezierPathElement>(_invoke: P0): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace classes {
    export interface FBBezierPathElementCallback<T = any> extends NSObject {
      alloc<R = FBBezierPathElementCallback>(): R;
      new: <R = FBBezierPathElementCallback>() => R;
    }
  }
}

declare const FBBezierPathElementCallback: cocoa.classes.FBBezierPathElementCallback;
