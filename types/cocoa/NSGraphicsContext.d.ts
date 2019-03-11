/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGraphicsContext<T = any> extends cocoa.NSObject {
    _releaseCIContext<R = void>(): R;
    CIContext<R = unknown>(): R;
    setColorRenderingIntent<R = void, P0 = number>(_setColorRenderingIntent: P0): R;
    colorRenderingIntent<R = number>(): R;
    compositingOperation<R = number>(): R;
    setCompositingOperation<R = void, P0 = number>(_setCompositingOperation: P0): R;
    patternPhase<R = cocoa.CGPoint>(): R;
    setPatternPhase<R = void, P0 = cocoa.CGPoint>(_setPatternPhase: P0): R;
    imageInterpolation<R = number>(): R;
    setImageInterpolation<R = void, P0 = number>(_setImageInterpolation: P0): R;
    shouldAntialias<R = boolean>(): R;
    setShouldAntialias<R = void, P0 = boolean>(_setShouldAntialias: P0): R;
    graphicsPort<R = void>(): R;
    flushGraphics<R = void>(): R;
    restoreGraphicsState<R = void>(): R;
    saveGraphicsState<R = void>(): R;
    CALayer<R = unknown>(): R;
    setFocusStack<R = void, P0 = unknown>(_setFocusStack: P0): R;
    focusStack<R = unknown>(): R;
    colorFactory<R = unknown>(): R;
    flipped<R = boolean>(): R;
    CGContext<R = cocoa.CGContext>(): R;
    drawingToScreen<R = boolean>(): R;
    attributes<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface NSGraphicsContext<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSGraphicsContext>(): R;
      new: <R = NSGraphicsContext>() => R;
      setGraphicsState<R = void, P0 = number>(_setGraphicsState: P0): R;
      configureGraphicsContextForCALayer_withCGContext_andRenderWithHandler<R = void, P0 = unknown, P1 = cocoa.CGContext, P2 = cocoa.CDUnknownBlockType>(_configureGraphicsContextForCALayer: P0, _withCGContext: P1, _andRenderWithHandler: P2): R;
      graphicsContextWithCGContext_forCALayer<R = unknown, P0 = cocoa.CGContext, P1 = unknown>(_graphicsContextWithCGContext: P0, _forCALayer: P1): R;
      graphicsContextWithGraphicsPort_flipped<R = unknown, P0 = void, P1 = boolean>(_graphicsContextWithGraphicsPort: P0, _flipped: P1): R;
      graphicsContextWithCGContext_flipped<R = unknown, P0 = cocoa.CGContext, P1 = boolean>(_graphicsContextWithCGContext: P0, _flipped: P1): R;
      graphicsContextWithBitmapImageRep<R = unknown, P0 = unknown>(_graphicsContextWithBitmapImageRep: P0): R;
      graphicsContextWithWindow<R = unknown, P0 = unknown>(_graphicsContextWithWindow: P0): R;
      graphicsContextWithAttributes<R = unknown, P0 = unknown>(_graphicsContextWithAttributes: P0): R;
      isCurrentContextDrawingToScreen<R = boolean>(): R;
      currentContextDrawingToScreen<R = boolean>(): R;
      setCurrentContext<R = void, P0 = unknown>(_setCurrentContext: P0): R;
      currentContext<R = unknown>(): R;
      _lastOnScreenContext<R = unknown>(): R;
    }
  }
}

declare const NSGraphicsContext: cocoa.classes.NSGraphicsContext;
