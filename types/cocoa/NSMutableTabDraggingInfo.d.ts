/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableTabDraggingInfo<T = any> extends cocoa.NSObject, cocoa.NSTabDraggingInfoProtocol {
    cxx_destruct<R = void>(): R;
    draggingItem<R = cocoa.NSTabBarItem>(): R;
    setDraggingItem<R = void, P0 = cocoa.NSTabBarItem>(_v: P0): R;
    draggingSource<R = unknown>(): R;
    setDraggingSource<R = void, P0 = unknown>(_v: P0): R;
    draggedImage<R = cocoa.NSImage>(): R;
    setDraggedImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    draggingLocation<R = cocoa.CGPoint>(): R;
    setDraggingLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    draggingSourceOperationMask<R = number>(): R;
    setDraggingSourceOperationMask<R = void, P0 = number>(_v: P0): R;
    draggingDestinationWindow<R = cocoa.NSWindow>(): R;
    setDraggingDestinationWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMutableTabDraggingInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTabDraggingInfoProtocol {
      alloc<R = NSMutableTabDraggingInfo>(): R;
      new: <R = NSMutableTabDraggingInfo>() => R;
    }
  }
}

declare const NSMutableTabDraggingInfo: cocoa.classes.NSMutableTabDraggingInfo;
