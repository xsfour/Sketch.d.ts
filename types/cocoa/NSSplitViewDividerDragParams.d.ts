/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewDividerDragParams<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSplitViewDividerDragParams<T = any> extends NSObject {
      alloc<R = NSSplitViewDividerDragParams>(): R;
      new: <R = NSSplitViewDividerDragParams>() => R;
    }
  }
}

declare const NSSplitViewDividerDragParams: cocoa.classes.NSSplitViewDividerDragParams;
