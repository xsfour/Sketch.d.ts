/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLContext<T = any> extends NSObject, NSLockingProtocol {
    cxx_destruct<R = void>(): R;
    createTexture_fromView_internalFormat<R = void, P0 = number, P1 = unknown, P2 = number>(_createTexture: P0, _fromView: P1, _internalFormat: P2): R;
    getValues_forParameter<R = void, P0 = number, P1 = number>(_getValues: P0, _forParameter: P1): R;
    setValues_forParameter<R = void, P0 = number, P1 = number>(_setValues: P0, _forParameter: P1): R;
    setFullScreen<R = void>(): R;
    setOffScreen_width_height_rowbytes<R = void, P0 = void, P1 = number, P2 = number, P3 = number>(_setOffScreen: P0, _width: P1, _height: P2, _rowbytes: P3): R;
    _surfaceDidComeBack<R = void, P0 = unknown>(__surfaceDidComeBack: P0): R;
    _surfaceWillGoAway<R = void, P0 = unknown>(__surfaceWillGoAway: P0): R;
    update<R = void>(): R;
    clearDrawable<R = void>(): R;
    flushBuffer<R = void>(): R;
    copyAttributesFromContext_withMask<R = void, P0 = unknown, P1 = number>(_copyAttributesFromContext: P0, _withMask: P1): R;
    makeCurrentContext<R = void>(): R;
    dealloc<R = void>(): R;
    initWithCGLContextObj<R = unknown, P0 = _CGLContextObject>(_initWithCGLContextObj: P0): R;
    initWithFormat_shareContext<R = unknown, P0 = unknown, P1 = unknown>(_initWithFormat: P0, _shareContext: P1): R;
    _updateOpenGLViewport<R = void>(): R;
    isSharedWithContext<R = boolean, P0 = unknown>(_isSharedWithContext: P0): R;
    _initWithCGLContextObj<R = unknown, P0 = void>(__initWithCGLContextObj: P0): R;
    _contextAuxiliary<R = void>(): R;
    setTextureImageToPixelBuffer_colorBuffer<R = void, P0 = unknown, P1 = number>(_setTextureImageToPixelBuffer: P0, _colorBuffer: P1): R;
    pixelBufferMipMapLevel<R = number>(): R;
    pixelBufferCubeMapFace<R = number>(): R;
    pixelBuffer<R = unknown>(): R;
    setPixelBuffer_cubeMapFace_mipMapLevel_currentVirtualScreen<R = void, P0 = unknown, P1 = number, P2 = number, P3 = number>(_setPixelBuffer: P0, _cubeMapFace: P1, _mipMapLevel: P2, _currentVirtualScreen: P3): R;
    CGLContextObj<R = _CGLContextObject>(): R;
    currentVirtualScreen<R = number>(): R;
    setCurrentVirtualScreen<R = void, P0 = number>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    pixelFormat<R = NSOpenGLPixelFormat>(): R;
    hasDefaultFramebuffer<R = boolean>(): R;
    defaultFramebufferDimensions<R = CGSize>(): R;
  }
  namespace classes {
    export interface NSOpenGLContext<T = any> extends NSObject, NSLockingProtocol {
      alloc<R = NSOpenGLContext>(): R;
      new: <R = NSOpenGLContext>() => R;
      clearCurrentContext<R = void>(): R;
      currentContext<R = unknown>(): R;
      initialize<R = void>(): R;
      openGLContextWithCGLContextObj<R = unknown, P0 = _CGLContextObject>(_openGLContextWithCGLContextObj: P0): R;
    }
  }
}

declare const NSOpenGLContext: cocoa.classes.NSOpenGLContext;
