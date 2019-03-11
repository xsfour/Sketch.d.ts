/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentImageView<T = any> extends cocoa.NSImageView {}
  namespace classes {
    export interface NSTextAttachmentImageView<T = any> extends cocoa.classes.NSImageView {
      alloc<R = NSTextAttachmentImageView>(): R;
      new: <R = NSTextAttachmentImageView>() => R;
    }
  }
}

declare const NSTextAttachmentImageView: cocoa.classes.NSTextAttachmentImageView;
