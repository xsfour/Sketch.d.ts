/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeImage<T = any> extends NSImage {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCompositeImage<T = any> extends NSImage {
      alloc<R = NSCompositeImage>(): R;
      new: <R = NSCompositeImage>() => R;
      compositeImageWithConstituentImages<R = unknown, P0 = unknown>(_compositeImageWithConstituentImages: P0): R;
    }
  }
}

declare const NSCompositeImage: cocoa.classes.NSCompositeImage;
