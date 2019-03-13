/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeGroupItemNode<T = any> extends NSTouchBarItemTreeItemNode, NSTouchBarItemTreeParentNodeProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = NSTouchBar>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeGroupItemNode<T = any> extends NSTouchBarItemTreeItemNode, NSTouchBarItemTreeParentNodeProtocol {
      alloc<R = NSTouchBarItemTreeGroupItemNode>(): R;
      new: <R = NSTouchBarItemTreeGroupItemNode>() => R;
    }
  }
}

declare const NSTouchBarItemTreeGroupItemNode: cocoa.classes.NSTouchBarItemTreeGroupItemNode;
