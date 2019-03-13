/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableTabDraggingInfo<T = any> extends NSObject, NSTabDraggingInfoProtocol {
    cxx_destruct<R = void>(): R;
    draggingItem<R = NSTabBarItem>(): R;
    setDraggingItem<R = void, P0 = NSTabBarItem>(_v: P0): R;
    draggingSource<R = unknown>(): R;
    setDraggingSource<R = void, P0 = unknown>(_v: P0): R;
    draggedImage<R = NSImage>(): R;
    setDraggedImage<R = void, P0 = NSImage>(_v: P0): R;
    draggingLocation<R = CGPoint>(): R;
    setDraggingLocation<R = void, P0 = CGPoint>(_v: P0): R;
    draggingSourceOperationMask<R = number>(): R;
    setDraggingSourceOperationMask<R = void, P0 = number>(_v: P0): R;
    draggingDestinationWindow<R = NSWindow>(): R;
    setDraggingDestinationWindow<R = void, P0 = NSWindow>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMutableTabDraggingInfo<T = any> extends NSObject, NSTabDraggingInfoProtocol {
      alloc<R = NSMutableTabDraggingInfo>(): R;
      new: <R = NSMutableTabDraggingInfo>() => R;
    }
  }
}

declare const NSMutableTabDraggingInfo: cocoa.classes.NSMutableTabDraggingInfo;
