/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingInfoProtocol<T = any> extends NSObjectProtocol {
    draggingItem<R = NSTabBarItem>(): R;
    draggingSource<R = unknown>(): R;
    draggedImage<R = NSImage>(): R;
    draggingLocation<R = CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = NSWindow>(): R;
  }
  namespace classes {
    export interface NSTabDraggingInfoProtocol<T = any> extends NSObjectProtocol {  }
  }
}
