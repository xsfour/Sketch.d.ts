/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageViewWithWritableAlignmentRectInsets<T = any> extends NSImageView {
    alignmentRectInsets<R = NSEdgeInsets>(): R;
    setAlignmentRectInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
  }
  namespace classes {
    export interface NSImageViewWithWritableAlignmentRectInsets<T = any> extends NSImageView {
      alloc<R = NSImageViewWithWritableAlignmentRectInsets>(): R;
      new: <R = NSImageViewWithWritableAlignmentRectInsets>() => R;
    }
  }
}

declare const NSImageViewWithWritableAlignmentRectInsets: cocoa.classes.NSImageViewWithWritableAlignmentRectInsets;
