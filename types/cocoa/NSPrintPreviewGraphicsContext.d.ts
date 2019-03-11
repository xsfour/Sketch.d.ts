/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPreviewGraphicsContext<T = any> extends cocoa.NSProxy {
    isFlipped<R = boolean>(): R;
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithPreviousContext<R = unknown, P0 = unknown>(_initWithPreviousContext: P0): R;
  }
  namespace classes {
    export interface NSPrintPreviewGraphicsContext<T = any> extends cocoa.classes.NSProxy {  }
  }
}

declare const NSPrintPreviewGraphicsContext: cocoa.classes.NSPrintPreviewGraphicsContext;
