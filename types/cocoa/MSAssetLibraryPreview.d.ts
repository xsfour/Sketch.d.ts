/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryPreview<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    preview<R = cocoa.NSImage>(): R;
    setPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    libraryPreview<R = cocoa.NSImage>(): R;
    setLibraryPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    contentPath<R = cocoa.NSBezierPath>(): R;
    previewFrame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSAssetLibraryPreview<T = any> extends cocoa.classes.NSView {
      alloc<R = MSAssetLibraryPreview>(): R;
      new: <R = MSAssetLibraryPreview>() => R;
    }
  }
}

declare const MSAssetLibraryPreview: cocoa.classes.MSAssetLibraryPreview;
