/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeControllerTreeNode<T = any> extends NSTreeNode {
    updateChildNodesForKeyPath_affectedIndexPaths<R = void, P0 = unknown, P1 = unknown>(_updateChildNodesForKeyPath: P0, _affectedIndexPaths: P1): R;
    isLeaf<R = boolean>(): R;
    _leafState<R = number>(): R;
    countKeyPath<R = unknown>(): R;
    childrenKeyPath<R = unknown>(): R;
    leafKeyPath<R = unknown>(): R;
    _configureObservingWithOption<R = void, P0 = number>(__configureObservingWithOption: P0): R;
    _configureObservingForChildNodesWithOption<R = void, P0 = number>(__configureObservingForChildNodesWithOption: P0): R;
    _tearDownObserving<R = void>(): R;
    _setupObserving<R = void>(): R;
    initWithRepresentedObject_treeController<R = unknown, P0 = unknown, P1 = unknown>(_initWithRepresentedObject: P0, _treeController: P1): R;
  }
  namespace classes {
    export interface NSTreeControllerTreeNode<T = any> extends NSTreeNode {
      alloc<R = NSTreeControllerTreeNode>(): R;
      new: <R = NSTreeControllerTreeNode>() => R;
    }
  }
}

declare const NSTreeControllerTreeNode: cocoa.classes.NSTreeControllerTreeNode;
