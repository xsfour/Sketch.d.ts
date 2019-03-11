/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreeBarProviderNode<T = any> extends cocoa.NSTouchBarItemTreeNode, cocoa.NSTouchBarItemTreeParentNodeProtocol {
    itemIdentifier<R = unknown>(): R;
    touchBar<R = cocoa.NSTouchBar>(): R;
    description<R = cocoa.NSString>(): R;
    touchBarLayoutDirection<R = number>(): R;
    touchBarContainingChildNodes<R = cocoa.NSTouchBar>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreeBarProviderNode<T = any> extends cocoa.classes.NSTouchBarItemTreeNode, cocoa.classes.NSTouchBarItemTreeParentNodeProtocol {
      alloc<R = NSTouchBarItemTreeBarProviderNode>(): R;
      new: <R = NSTouchBarItemTreeBarProviderNode>() => R;
      nodeForTouchBar<R = unknown, P0 = unknown>(_nodeForTouchBar: P0): R;
    }
  }
}

declare const NSTouchBarItemTreeBarProviderNode: cocoa.classes.NSTouchBarItemTreeBarProviderNode;
