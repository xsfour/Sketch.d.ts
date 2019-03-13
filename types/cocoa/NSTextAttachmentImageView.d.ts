/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentImageView<T = any> extends NSImageView {}
  namespace classes {
    export interface NSTextAttachmentImageView<T = any> extends NSImageView {
      alloc<R = NSTextAttachmentImageView>(): R;
      new: <R = NSTextAttachmentImageView>() => R;
    }
  }
}

declare const NSTextAttachmentImageView: cocoa.classes.NSTextAttachmentImageView;
