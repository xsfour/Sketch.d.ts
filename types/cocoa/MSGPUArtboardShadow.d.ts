/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPUArtboardShadow<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    cornerSourceSize<R = number>(): R;
    cornerSize<R = number>(): R;
    minimumArtboardSizeForDrawingShadow<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRenderer<R = unknown, P0 = unknown>(_initWithRenderer: P0): R;
    selectedTexture<R = cocoa.MSGPUTexture>(): R;
    texture<R = cocoa.MSGPUTexture>(): R;
  }
  namespace classes {
    export interface MSGPUArtboardShadow<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSGPUArtboardShadow>(): R;
      new: <R = MSGPUArtboardShadow>() => R;
    }
  }
}

declare const MSGPUArtboardShadow: cocoa.classes.MSGPUArtboardShadow;
