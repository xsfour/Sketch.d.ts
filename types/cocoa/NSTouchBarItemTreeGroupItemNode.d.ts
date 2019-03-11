/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeGroupItemNode<T = any> extends cocoa.NSTouchBarItemTreeItemNode, cocoa.NSTouchBarItemTreeParentNodeProtocol {
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = cocoa.NSTouchBar>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeGroupItemNode<T = any> extends cocoa.classes.NSTouchBarItemTreeItemNode, cocoa.classes.NSTouchBarItemTreeParentNodeProtocol {
      alloc<R = NSTouchBarItemTreeGroupItemNode>(): R;
      new: <R = NSTouchBarItemTreeGroupItemNode>() => R;
    }
  }
}

declare const NSTouchBarItemTreeGroupItemNode: cocoa.classes.NSTouchBarItemTreeGroupItemNode;
