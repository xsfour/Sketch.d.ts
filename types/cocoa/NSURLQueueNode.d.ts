/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLQueueNode<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSURLQueueNode<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSURLQueueNode>(): R;
      new: <R = NSURLQueueNode>() => R;
    }
  }
}

declare const NSURLQueueNode: cocoa.classes.NSURLQueueNode;
