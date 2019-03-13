/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeItemNode<T = any> extends NSTouchBarItemTreeNode {
    description<R = unknown>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
    itemIdentifier<R = unknown>(): R;
    item<R = NSTouchBarItem>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeItemNode<T = any> extends NSTouchBarItemTreeNode {
      alloc<R = NSTouchBarItemTreeItemNode>(): R;
      new: <R = NSTouchBarItemTreeItemNode>() => R;
      nodeForItem<R = unknown, P0 = unknown>(_nodeForItem: P0): R;
    }
  }
}

declare const NSTouchBarItemTreeItemNode: cocoa.classes.NSTouchBarItemTreeItemNode;
