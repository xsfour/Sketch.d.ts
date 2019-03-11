/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreview<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    firstFourDataImages<R = unknown>(): R;
    firstThreeDataTextItems<R = unknown>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    generatePluginTextDataPreview<R = unknown>(): R;
    generateLocalTextDataPreview<R = unknown>(): R;
    generateTextDataPreview<R = unknown>(): R;
    generatePluginImageDataPreview<R = unknown>(): R;
    generateLocalImageDataPreview<R = unknown>(): R;
    generateImageDataPreview<R = unknown>(): R;
    generatePreview<R = void>(): R;
    placeHolderImage<R = unknown>(): R;
    preview<R = cocoa.NSImage>(): R;
    setPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    dataItem<R = cocoa.MSDataPreferenceItem>(): R;
    setDataItem<R = void, P0 = cocoa.MSDataPreferenceItem>(_v: P0): R;
    imageSize<R = cocoa.CGSize>(): R;
    contentPath<R = cocoa.NSBezierPath>(): R;
    previewFrame<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSDataPreview<T = any> extends cocoa.classes.NSView {
      alloc<R = MSDataPreview>(): R;
      new: <R = MSDataPreview>() => R;
    }
  }
}

declare const MSDataPreview: cocoa.classes.MSDataPreview;
