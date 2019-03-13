/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLQueueNode<T = any> extends NSObject {}
  namespace classes {
    export interface NSURLQueueNode<T = any> extends NSObject {
      alloc<R = NSURLQueueNode>(): R;
      new: <R = NSURLQueueNode>() => R;
    }
  }
}

declare const NSURLQueueNode: cocoa.classes.NSURLQueueNode;
