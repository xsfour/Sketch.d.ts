/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLTexture<T = any> extends cocoa.NSObject, cocoa.MSGPUTextureProtocol {
    readImageWithColorSpace<R = cocoa.CGImage, P0 = cocoa.CGColorSpace>(_readImageWithColorSpace: P0): R;
    dealloc<R = void>(): R;
    initWithTextureID_width_height<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithTextureID: P0, _width: P1, _height: P2): R;
    filter<R = number>(): R;
    setFilter<R = void, P0 = number>(_v: P0): R;
    textureID<R = number>(): R;
  }
  namespace classes {
    export interface MSOpenGLTexture<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSGPUTextureProtocol {
      alloc<R = MSOpenGLTexture>(): R;
      new: <R = MSOpenGLTexture>() => R;
    }
  }
}

declare const MSOpenGLTexture: cocoa.classes.MSOpenGLTexture;
