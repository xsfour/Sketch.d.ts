/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {}
  namespace classes {
    export interface NSImageViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {
      alloc<R = NSImageViewTextAttachmentCell>(): R;
      new: <R = NSImageViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSImageViewTextAttachmentCell: cocoa.classes.NSImageViewTextAttachmentCell;
