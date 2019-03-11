/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMetalTexture<T = any> extends cocoa.NSObject, cocoa.MSGPUTextureProtocol {
    cxx_destruct<R = void>(): R;
    initWithMetalTexture<R = unknown, P0 = unknown>(_initWithMetalTexture: P0): R;
    metalTexture<R = cocoa.MTLTexture>(): R;
    setMetalTexture<R = void, P0 = cocoa.MTLTexture>(_v: P0): R;
  }
  namespace classes {
    export interface MSMetalTexture<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSGPUTextureProtocol {
      alloc<R = MSMetalTexture>(): R;
      new: <R = MSMetalTexture>() => R;
    }
  }
}

declare const MSMetalTexture: cocoa.classes.MSMetalTexture;
