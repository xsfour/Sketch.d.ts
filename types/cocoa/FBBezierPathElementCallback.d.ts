/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierPathElementCallback<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    invoke<R = boolean, P0 = cocoa.FBBezierPathElement>(_invoke: P0): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace classes {
    export interface FBBezierPathElementCallback<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBBezierPathElementCallback>(): R;
      new: <R = FBBezierPathElementCallback>() => R;
    }
  }
}

declare const FBBezierPathElementCallback: cocoa.classes.FBBezierPathElementCallback;
