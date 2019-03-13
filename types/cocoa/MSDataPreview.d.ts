/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreview<T = any> extends NSView {
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
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    dataItem<R = MSDataPreferenceItem>(): R;
    setDataItem<R = void, P0 = MSDataPreferenceItem>(_v: P0): R;
    imageSize<R = CGSize>(): R;
    contentPath<R = NSBezierPath>(): R;
    previewFrame<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSDataPreview<T = any> extends NSView {
      alloc<R = MSDataPreview>(): R;
      new: <R = MSDataPreview>() => R;
    }
  }
}

declare const MSDataPreview: cocoa.classes.MSDataPreview;
