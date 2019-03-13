/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMergeNode<T = any> extends MSXMLElementWrapper {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGMergeNode<T = any> extends MSXMLElementWrapper {
      alloc<R = MSSVGMergeNode>(): R;
      new: <R = MSSVGMergeNode>() => R;
      mergeNodeNamed<R = unknown, P0 = unknown>(_mergeNodeNamed: P0): R;
    }
  }
}

declare const MSSVGMergeNode: cocoa.classes.MSSVGMergeNode;
