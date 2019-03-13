/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferenceIconView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    previewFrame<R = CGRect>(): R;
    contentPath<R = unknown>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    generatePreview<R = void>(): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    icon<R = NSImage>(): R;
    setIcon<R = void, P0 = NSImage>(_v: P0): R;
    placeHolderImage<R = NSImage>(): R;
  }
  namespace classes {
    export interface MSPluginsPreferenceIconView<T = any> extends NSView {
      alloc<R = MSPluginsPreferenceIconView>(): R;
      new: <R = MSPluginsPreferenceIconView>() => R;
    }
  }
}

declare const MSPluginsPreferenceIconView: cocoa.classes.MSPluginsPreferenceIconView;
