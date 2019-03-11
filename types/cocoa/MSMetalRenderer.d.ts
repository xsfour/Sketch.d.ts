/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMetalRenderer<T = any> extends cocoa.NSObject, cocoa.MSGPURendererProtocol {
    cxx_destruct<R = void>(): R;
    _setupScissorRect_forTargetTexture<R = void, P0 = unknown, P1 = unknown>(__setupScissorRect: P0, _forTargetTexture: P1): R;
    dealloc<R = void>(): R;
    initWithCompletionHandler_device<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = unknown>(_initWithCompletionHandler: P0, _device: P1): R;
    textureLock<R = cocoa._opaque_pthread_mutex_t>(): R;
    drawCompletionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setDrawCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    scissorRect<R = unknown>(): R;
    setScissorRect<R = void, P0 = unknown>(_v: P0): R;
    hasScissor<R = boolean>(): R;
    setHasScissor<R = void, P0 = boolean>(_v: P0): R;
    drawColorQuadState<R = cocoa.MTLRenderPipelineState>(): R;
    setDrawColorQuadState<R = void, P0 = cocoa.MTLRenderPipelineState>(_v: P0): R;
    drawTextureNearestState<R = cocoa.MTLRenderPipelineState>(): R;
    setDrawTextureNearestState<R = void, P0 = cocoa.MTLRenderPipelineState>(_v: P0): R;
    drawTextureState<R = cocoa.MTLRenderPipelineState>(): R;
    setDrawTextureState<R = void, P0 = cocoa.MTLRenderPipelineState>(_v: P0): R;
    metalCommandQueue<R = cocoa.MTLCommandQueue>(): R;
    setMetalCommandQueue<R = void, P0 = cocoa.MTLCommandQueue>(_v: P0): R;
    metalLibrary<R = cocoa.MTLLibrary>(): R;
    setMetalLibrary<R = void, P0 = cocoa.MTLLibrary>(_v: P0): R;
    currentDrawable<R = cocoa.CAMetalDrawable>(): R;
    setCurrentDrawable<R = void, P0 = cocoa.CAMetalDrawable>(_v: P0): R;
    currentCommands<R = cocoa.MTLCommandBuffer>(): R;
    setCurrentCommands<R = void, P0 = cocoa.MTLCommandBuffer>(_v: P0): R;
    metalLayer<R = cocoa.CAMetalLayer>(): R;
    setMetalLayer<R = void, P0 = cocoa.CAMetalLayer>(_v: P0): R;
  }
  namespace classes {
    export interface MSMetalRenderer<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSGPURendererProtocol {
      alloc<R = MSMetalRenderer>(): R;
      new: <R = MSMetalRenderer>() => R;
      createWithCompletionHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_createWithCompletionHandler: P0): R;
    }
  }
}

declare const MSMetalRenderer: cocoa.classes.MSMetalRenderer;
