/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDropTargetGapIndicator<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface NSCollectionViewDropTargetGapIndicator<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCollectionViewDropTargetGapIndicator>(): R;
      new: <R = NSCollectionViewDropTargetGapIndicator>() => R;
    }
  }
}

declare const NSCollectionViewDropTargetGapIndicator: cocoa.classes.NSCollectionViewDropTargetGapIndicator;
