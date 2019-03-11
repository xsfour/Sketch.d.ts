/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextReplacementNode<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSTextReplacementNode<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTextReplacementNode>(): R;
      new: <R = NSTextReplacementNode>() => R;
    }
  }
}

declare const NSTextReplacementNode: cocoa.classes.NSTextReplacementNode;
