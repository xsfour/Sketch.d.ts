/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintCopyingGraphicsContext<T = any> extends cocoa.NSCGSContext, cocoa.NSPrintGraphicsContextAdvancingProtocol {
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithContextAttributes<R = unknown, P0 = unknown>(_initWithContextAttributes: P0): R;
  }
  namespace classes {
    export interface NSPrintCopyingGraphicsContext<T = any> extends cocoa.classes.NSCGSContext, cocoa.classes.NSPrintGraphicsContextAdvancingProtocol {
      alloc<R = NSPrintCopyingGraphicsContext>(): R;
      new: <R = NSPrintCopyingGraphicsContext>() => R;
    }
  }
}

declare const NSPrintCopyingGraphicsContext: cocoa.classes.NSPrintCopyingGraphicsContext;
