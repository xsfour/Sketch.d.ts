/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTemplatizingImageRep<T = any> extends NSImageRep {
    initWithSourceImage<R = unknown, P0 = unknown>(_initWithSourceImage: P0): R;
  }
  namespace classes {
    export interface NSTemplatizingImageRep<T = any> extends NSImageRep {
      alloc<R = NSTemplatizingImageRep>(): R;
      new: <R = NSTemplatizingImageRep>() => R;
    }
  }
}

declare const NSTemplatizingImageRep: cocoa.classes.NSTemplatizingImageRep;
