/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPUArtboardShadow<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    cornerSourceSize<R = number>(): R;
    cornerSize<R = number>(): R;
    minimumArtboardSizeForDrawingShadow<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRenderer<R = unknown, P0 = unknown>(_initWithRenderer: P0): R;
    selectedTexture<R = MSGPUTexture>(): R;
    texture<R = MSGPUTexture>(): R;
  }
  namespace classes {
    export interface MSGPUArtboardShadow<T = any> extends NSObject {
      alloc<R = MSGPUArtboardShadow>(): R;
      new: <R = MSGPUArtboardShadow>() => R;
    }
  }
}

declare const MSGPUArtboardShadow: cocoa.classes.MSGPUArtboardShadow;
