/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferenceIconView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    previewFrame<R = cocoa.CGRect>(): R;
    contentPath<R = unknown>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    generatePreview<R = void>(): R;
    preview<R = cocoa.NSImage>(): R;
    setPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    icon<R = cocoa.NSImage>(): R;
    setIcon<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    placeHolderImage<R = cocoa.NSImage>(): R;
  }
  namespace classes {
    export interface MSPluginsPreferenceIconView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSPluginsPreferenceIconView>(): R;
      new: <R = MSPluginsPreferenceIconView>() => R;
    }
  }
}

declare const MSPluginsPreferenceIconView: cocoa.classes.MSPluginsPreferenceIconView;
