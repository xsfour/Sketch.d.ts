/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentViewProvider<T = any> {
    // + NSTextAttachmentViewProvider(NSTextAttachmentView_UTISupport):
    
  }
  namespace classes {
    export interface NSTextAttachmentViewProvider<T = any> {
      // + NSTextAttachmentViewProvider(NSTextAttachmentView_UTISupport):
      textAttachmentViewProviderClassForFileType<R = unknown, P0 = unknown>(_textAttachmentViewProviderClassForFileType: P0): R;
    }
  }
}

declare const NSTextAttachmentViewProvider: cocoa.classes.NSTextAttachmentViewProvider;
