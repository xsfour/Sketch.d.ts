/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBitmapGraphicsContext<T = any> extends NSWindowGraphicsContext {
    _initWithBitmapImageRep<R = unknown, P0 = unknown>(__initWithBitmapImageRep: P0): R;
    _initWithGraphicsPort_flipped_drawingToScreen<R = unknown, P0 = void, P1 = boolean, P2 = boolean>(__initWithGraphicsPort: P0, _flipped: P1, _drawingToScreen: P2): R;
    _initWithGraphicsPort_flipped<R = unknown, P0 = void, P1 = boolean>(__initWithGraphicsPort: P0, _flipped: P1): R;
  }
  namespace classes {
    export interface NSBitmapGraphicsContext<T = any> extends NSWindowGraphicsContext {
      alloc<R = NSBitmapGraphicsContext>(): R;
      new: <R = NSBitmapGraphicsContext>() => R;
    }
  }
}

declare const NSBitmapGraphicsContext: cocoa.classes.NSBitmapGraphicsContext;
