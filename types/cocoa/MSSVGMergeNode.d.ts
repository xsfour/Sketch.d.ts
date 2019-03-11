/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMergeNode<T = any> extends cocoa.MSXMLElementWrapper {
    in<R = cocoa.NSString>(): R;
    setIn<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGMergeNode<T = any> extends cocoa.classes.MSXMLElementWrapper {
      alloc<R = MSSVGMergeNode>(): R;
      new: <R = MSSVGMergeNode>() => R;
      mergeNodeNamed<R = unknown, P0 = unknown>(_mergeNodeNamed: P0): R;
    }
  }
}

declare const MSSVGMergeNode: cocoa.classes.MSSVGMergeNode;
