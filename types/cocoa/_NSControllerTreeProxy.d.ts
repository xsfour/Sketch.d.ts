/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControllerTreeProxy<T = any> extends NSTreeNode, _NSBindingTreeProtocol {
    objectInChildNodesAtIndex<R = unknown, P0 = number>(_objectInChildNodesAtIndex: P0): R;
    parentNode<R = unknown>(): R;
    mutableChildNodes<R = unknown>(): R;
    childNodes<R = unknown>(): R;
    countOfChildNodes<R = number>(): R;
    isLeaf<R = boolean>(): R;
    indexPath<R = unknown>(): R;
    representedObject<R = unknown>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace classes {
    export interface _NSControllerTreeProxy<T = any> extends NSTreeNode, _NSBindingTreeProtocol {
      alloc<R = _NSControllerTreeProxy>(): R;
      new: <R = _NSControllerTreeProxy>() => R;
    }
  }
}
