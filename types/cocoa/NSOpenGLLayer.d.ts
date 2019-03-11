/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLLayer<T = any> extends cocoa.CAOpenGLLayer {
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    willChangeValueForKey<R = void, P0 = unknown>(_willChangeValueForKey: P0): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    display<R = void>(): R;
    drawInCGLContext_pixelFormat_forLayerTime_displayTime<R = void, P0 = cocoa._CGLContextObject, P1 = cocoa._CGLPixelFormatObject, P2 = number, P3 = unknown>(_drawInCGLContext: P0, _pixelFormat: P1, _forLayerTime: P2, _displayTime: P3): R;
    canDrawInCGLContext_pixelFormat_forLayerTime_displayTime<R = boolean, P0 = cocoa._CGLContextObject, P1 = cocoa._CGLPixelFormatObject, P2 = number, P3 = unknown>(_canDrawInCGLContext: P0, _pixelFormat: P1, _forLayerTime: P2, _displayTime: P3): R;
    releaseCGLContext<R = void, P0 = cocoa._CGLContextObject>(_releaseCGLContext: P0): R;
    copyCGLContextForPixelFormat<R = cocoa._CGLContextObject, P0 = cocoa._CGLPixelFormatObject>(_copyCGLContextForPixelFormat: P0): R;
    releaseCGLPixelFormat<R = void, P0 = cocoa._CGLPixelFormatObject>(_releaseCGLPixelFormat: P0): R;
    copyCGLPixelFormatForDisplayMask<R = cocoa._CGLPixelFormatObject, P0 = number>(_copyCGLPixelFormatForDisplayMask: P0): R;
    drawInOpenGLContext_pixelFormat_forLayerTime_displayTime<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_drawInOpenGLContext: P0, _pixelFormat: P1, _forLayerTime: P2, _displayTime: P3): R;
    canDrawInOpenGLContext_pixelFormat_forLayerTime_displayTime<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_canDrawInOpenGLContext: P0, _pixelFormat: P1, _forLayerTime: P2, _displayTime: P3): R;
    openGLContextForPixelFormat<R = unknown, P0 = unknown>(_openGLContextForPixelFormat: P0): R;
    drawInContext<R = void, P0 = cocoa.CGContext>(_drawInContext: P0): R;
    openGLPixelFormatForDisplayMask<R = unknown, P0 = number>(_openGLPixelFormatForDisplayMask: P0): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
    view<R = cocoa.NSView>(): R;
    setView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    openGLContext<R = cocoa.NSOpenGLContext>(): R;
    setOpenGLContext<R = void, P0 = cocoa.NSOpenGLContext>(_v: P0): R;
    openGLPixelFormat<R = cocoa.NSOpenGLPixelFormat>(): R;
    setOpenGLPixelFormat<R = void, P0 = cocoa.NSOpenGLPixelFormat>(_v: P0): R;
  }
  namespace classes {
    export interface NSOpenGLLayer<T = any> extends cocoa.classes.CAOpenGLLayer {
      defaultValueForKey<R = unknown, P0 = unknown>(_defaultValueForKey: P0): R;
    }
  }
}

declare const NSOpenGLLayer: cocoa.classes.NSOpenGLLayer;
