/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultiplePagePDFImageView<T = any> extends NSView {
    setImageRep<R = void, P0 = unknown>(_setImageRep: P0): R;
    imageRep<R = unknown>(): R;
    numberOfPages<R = number>(): R;
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface NSMultiplePagePDFImageView<T = any> extends NSView {
      alloc<R = NSMultiplePagePDFImageView>(): R;
      new: <R = NSMultiplePagePDFImageView>() => R;
    }
  }
}

declare const NSMultiplePagePDFImageView: cocoa.classes.NSMultiplePagePDFImageView;
