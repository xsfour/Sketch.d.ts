/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeItemNode<T = any> extends cocoa.NSTouchBarItemTreeNode {
    description<R = unknown>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
    itemIdentifier<R = unknown>(): R;
    item<R = cocoa.NSTouchBarItem>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeItemNode<T = any> extends cocoa.classes.NSTouchBarItemTreeNode {
      alloc<R = NSTouchBarItemTreeItemNode>(): R;
      new: <R = NSTouchBarItemTreeItemNode>() => R;
      nodeForItem<R = unknown, P0 = unknown>(_nodeForItem: P0): R;
    }
  }
}

declare const NSTouchBarItemTreeItemNode: cocoa.classes.NSTouchBarItemTreeItemNode;
