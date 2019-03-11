/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    imageBounds<R = cocoa.CGRect>(): R;
    imageSize<R = cocoa.CGSize>(): R;
    zoomValue<R = number>(): R;
    drawMarchingAntsForPath<R = void, P0 = unknown>(_drawMarchingAntsForPath: P0): R;
    pointInBitmapLayer<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_pointInBitmapLayer: P0): R;
    refreshRectInBitmapCoordinates<R = void, P0 = cocoa.CGRect>(_refreshRectInBitmapCoordinates: P0): R;
    mouseUp_flags<R = void, P0 = cocoa.CGPoint, P1 = number>(_mouseUp: P0, _flags: P1): R;
    mouseDragged<R = void, P0 = cocoa.CGPoint>(_mouseDragged: P0): R;
    mouseDown_flags<R = void, P0 = cocoa.CGPoint, P1 = number>(_mouseDown: P0, _flags: P1): R;
    draw<R = void>(): R;
    eventHandler<R = cocoa.MSBitmapEditEventHandler>(): R;
    setEventHandler<R = void, P0 = cocoa.MSBitmapEditEventHandler>(_v: P0): R;
    accumulatedSelection<R = cocoa.NSBezierPath>(): R;
    setAccumulatedSelection<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    bitmapEditableLayer<R = cocoa.MSBitmapEditable>(): R;
  }
  namespace classes {
    export interface MSBitmapEditor<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBitmapEditor>(): R;
      new: <R = MSBitmapEditor>() => R;
    }
  }
}

declare const MSBitmapEditor: cocoa.classes.MSBitmapEditor;
