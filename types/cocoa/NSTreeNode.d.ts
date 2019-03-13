/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeNode<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    objectAtIndexPath<R = unknown, P0 = unknown>(_objectAtIndexPath: P0): R;
    _descendantNodeWithRepresentedObjectLineage<R = unknown, P0 = unknown>(__descendantNodeWithRepresentedObjectLineage: P0): R;
    sortWithSortDescriptors_recursively<R = void, P0 = unknown, P1 = boolean>(_sortWithSortDescriptors: P0, _recursively: P1): R;
    _indexPath<R = unknown>(): R;
    startObservingModelKeyPath<R = void, P0 = unknown>(_startObservingModelKeyPath: P0): R;
    countOfSubNodes<R = number>(): R;
    count<R = number>(): R;
    childCountForKeyPath<R = number, P0 = unknown>(_childCountForKeyPath: P0): R;
    objectInSubNodesAtIndex<R = unknown, P0 = number>(_objectInSubNodesAtIndex: P0): R;
    subnodeAtIndex<R = unknown, P0 = number>(_subnodeAtIndex: P0): R;
    subNodesAtIndexes<R = unknown, P0 = unknown>(_subNodesAtIndexes: P0): R;
    getSubNodes_range<R = void, P0 = unknown, P1 = _NSRange>(_getSubNodes: P0, _range: P1): R;
    willAccessChildNodes<R = void>(): R;
    descendantNodeAtIndexPath<R = unknown, P0 = unknown>(_descendantNodeAtIndexPath: P0): R;
    _privateChildNodes<R = unknown>(): R;
    setParentNode<R = void, P0 = unknown>(_setParentNode: P0): R;
    _detachFromParent<R = void>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    observedObject<R = unknown>(): R;
    _ignoreObserving<R = boolean>(): R;
    _enableObserving<R = void>(): R;
    _disableObserving<R = void>(): R;
    hasAncestor<R = boolean, P0 = unknown>(_hasAncestor: P0): R;
    removeSubNodesAtIndexes<R = void, P0 = unknown>(_removeSubNodesAtIndexes: P0): R;
    _removeSubNodesAtIndexes<R = void, P0 = unknown>(__removeSubNodesAtIndexes: P0): R;
    removeObjectFromSubNodesAtIndex<R = void, P0 = number>(_removeObjectFromSubNodesAtIndex: P0): R;
    _removeObjectFromSubNodesAtIndex<R = void, P0 = number>(__removeObjectFromSubNodesAtIndex: P0): R;
    insertObject_inSubNodesAtIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _inSubNodesAtIndex: P1): R;
    _insertObject_inSubNodesAtIndex<R = void, P0 = unknown, P1 = number>(__insertObject: P0, _inSubNodesAtIndex: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRepresentedObject<R = unknown, P0 = unknown>(_initWithRepresentedObject: P0): R;
    indexPath<R = NSIndexPath>(): R;
    leaf<R = boolean>(): R;
    mutableChildNodes<R = NSMutableArray>(): R;
    childNodes<R = NSArray>(): R;
    parentNode<R = NSTreeNode>(): R;
    representedObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTreeNode<T = any> extends NSObject {
      alloc<R = NSTreeNode>(): R;
      new: <R = NSTreeNode>() => R;
      treeNodeWithRepresentedObject<R = unknown, P0 = unknown>(_treeNodeWithRepresentedObject: P0): R;
    }
  }
}

declare const NSTreeNode: cocoa.classes.NSTreeNode;
