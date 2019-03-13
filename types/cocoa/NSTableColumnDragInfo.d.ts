/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableColumnDragInfo<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    draggedColumnView<R = NSView>(): R;
    setDraggedColumnView<R = void, P0 = NSView>(_v: P0): R;
    dragImageInset<R = number>(): R;
    setDragImageInset<R = void, P0 = number>(_v: P0): R;
    dragYPos<R = number>(): R;
    setDragYPos<R = void, P0 = number>(_v: P0): R;
    bodyDragImage<R = NSImage>(): R;
    setBodyDragImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableColumnDragInfo<T = any> extends NSObject {
      alloc<R = NSTableColumnDragInfo>(): R;
      new: <R = NSTableColumnDragInfo>() => R;
    }
  }
}

declare const NSTableColumnDragInfo: cocoa.classes.NSTableColumnDragInfo;
