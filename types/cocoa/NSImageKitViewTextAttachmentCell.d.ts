/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageKitViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {
    _imageKitViewClass<R = unknown>(): R;
    _loadImageKit<R = void>(): R;
  }
  namespace classes {
    export interface NSImageKitViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {
      alloc<R = NSImageKitViewTextAttachmentCell>(): R;
      new: <R = NSImageKitViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSImageKitViewTextAttachmentCell: cocoa.classes.NSImageKitViewTextAttachmentCell;
