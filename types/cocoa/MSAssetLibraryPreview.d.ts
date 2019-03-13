/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryPreview<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    libraryPreview<R = NSImage>(): R;
    setLibraryPreview<R = void, P0 = NSImage>(_v: P0): R;
    contentPath<R = NSBezierPath>(): R;
    previewFrame<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSAssetLibraryPreview<T = any> extends NSView {
      alloc<R = MSAssetLibraryPreview>(): R;
      new: <R = MSAssetLibraryPreview>() => R;
    }
  }
}

declare const MSAssetLibraryPreview: cocoa.classes.MSAssetLibraryPreview;
