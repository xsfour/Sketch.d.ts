/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileDragSource<T = any> extends NSObject {}
  namespace classes {
    export interface NSFileDragSource<T = any> extends NSObject {
      alloc<R = NSFileDragSource>(): R;
      new: <R = NSFileDragSource>() => R;
      draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    }
  }
}

declare const NSFileDragSource: cocoa.classes.NSFileDragSource;
