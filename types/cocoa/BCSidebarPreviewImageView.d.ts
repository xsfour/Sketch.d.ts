/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSidebarPreviewImageView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    wantsLayer<R = boolean>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface BCSidebarPreviewImageView<T = any> extends NSView {
      alloc<R = BCSidebarPreviewImageView>(): R;
      new: <R = BCSidebarPreviewImageView>() => R;
    }
  }
}

declare const BCSidebarPreviewImageView: cocoa.classes.BCSidebarPreviewImageView;
