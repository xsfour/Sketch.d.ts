/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXMLPlaceholderNode<T = any> extends cocoa.NSObject {
    initWithKind_options<R = unknown, P0 = number, P1 = number>(_initWithKind: P0, _options: P1): R;
    initWithKind<R = unknown, P0 = number>(_initWithKind: P0): R;
  }
  namespace classes {
    export interface _NSXMLPlaceholderNode<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXMLPlaceholderNode>(): R;
      new: <R = _NSXMLPlaceholderNode>() => R;
    }
  }
}
