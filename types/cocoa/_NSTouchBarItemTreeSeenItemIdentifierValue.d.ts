/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemTreeSeenItemIdentifierValue<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    nodeList<R = cocoa.NSMutableArray>(): R;
    setNodeList<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    responderBarLevel<R = number>(): R;
    setResponderBarLevel<R = void, P0 = number>(_v: P0): R;
    itemNode<R = cocoa.NSTouchBarItemTreeItemNode>(): R;
    setItemNode<R = void, P0 = cocoa.NSTouchBarItemTreeItemNode>(_v: P0): R;
    parentNode<R = cocoa.NSTouchBarItemTreeParentNode>(): R;
    setParentNode<R = void, P0 = cocoa.NSTouchBarItemTreeParentNode>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarItemTreeSeenItemIdentifierValue<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTouchBarItemTreeSeenItemIdentifierValue>(): R;
      new: <R = _NSTouchBarItemTreeSeenItemIdentifierValue>() => R;
    }
  }
}
