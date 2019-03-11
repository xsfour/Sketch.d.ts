/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSidebarPreviewImageView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    wantsLayer<R = boolean>(): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface BCSidebarPreviewImageView<T = any> extends cocoa.classes.NSView {
      alloc<R = BCSidebarPreviewImageView>(): R;
      new: <R = BCSidebarPreviewImageView>() => R;
    }
  }
}

declare const BCSidebarPreviewImageView: cocoa.classes.BCSidebarPreviewImageView;
