/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTreePosition<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    parentNode<R = cocoa.NSTouchBarItemTreeParentNode>(): R;
    indexInParent<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarItemTreePosition<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSTouchBarItemTreePosition>(): R;
      new: <R = NSTouchBarItemTreePosition>() => R;
      positionInParentNode_atIndex<R = unknown, P0 = unknown, P1 = number>(_positionInParentNode: P0, _atIndex: P1): R;
    }
  }
}

declare const NSTouchBarItemTreePosition: cocoa.classes.NSTouchBarItemTreePosition;
