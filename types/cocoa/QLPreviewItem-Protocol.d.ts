/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewItemProtocol<T = any> {
    previewItemURL<R = cocoa.NSURL>(): R;
    previewItemDisplayState<R = unknown>(): R;
    previewItemTitle<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface QLPreviewItemProtocol<T = any> {  }
  }
}

declare const QLPreviewItemProtocol: cocoa.classes.QLPreviewItemProtocol;
