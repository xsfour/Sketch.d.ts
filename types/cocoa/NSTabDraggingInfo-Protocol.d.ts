/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingInfoProtocol<T = any> extends cocoa.NSObjectProtocol {
    draggingItem<R = cocoa.NSTabBarItem>(): R;
    draggingSource<R = unknown>(): R;
    draggedImage<R = cocoa.NSImage>(): R;
    draggingLocation<R = cocoa.CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = cocoa.NSWindow>(): R;
  }
  namespace classes {
    export interface NSTabDraggingInfoProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabDraggingInfoProtocol: cocoa.classes.NSTabDraggingInfoProtocol;
