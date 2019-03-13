/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewItemProtocol<T = any> {
    previewItemURL<R = NSURL>(): R;
    previewItemDisplayState<R = unknown>(): R;
    previewItemTitle<R = NSString>(): R;
  }
  namespace classes {
    export interface QLPreviewItemProtocol<T = any> {  }
  }
}
