/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageViewWithWritableAlignmentRectInsets<T = any> extends cocoa.NSImageView {
    alignmentRectInsets<R = cocoa.NSEdgeInsets>(): R;
    setAlignmentRectInsets<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
  }
  namespace classes {
    export interface NSImageViewWithWritableAlignmentRectInsets<T = any> extends cocoa.classes.NSImageView {
      alloc<R = NSImageViewWithWritableAlignmentRectInsets>(): R;
      new: <R = NSImageViewWithWritableAlignmentRectInsets>() => R;
    }
  }
}

declare const NSImageViewWithWritableAlignmentRectInsets: cocoa.classes.NSImageViewWithWritableAlignmentRectInsets;
