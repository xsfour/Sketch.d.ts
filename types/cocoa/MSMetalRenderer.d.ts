/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMetalRenderer<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
    cxx_destruct<R = void>(): R;
    _setupScissorRect_forTargetTexture<R = void, P0 = unknown, P1 = unknown>(__setupScissorRect: P0, _forTargetTexture: P1): R;
    dealloc<R = void>(): R;
    initWithCompletionHandler_device<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_initWithCompletionHandler: P0, _device: P1): R;
    textureLock<R = _opaque_pthread_mutex_t>(): R;
    drawCompletionHandler<R = CDUnknownBlockType>(): R;
    setDrawCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    scissorRect<R = unknown>(): R;
    setScissorRect<R = void, P0 = unknown>(_v: P0): R;
    hasScissor<R = boolean>(): R;
    setHasScissor<R = void, P0 = boolean>(_v: P0): R;
    drawColorQuadState<R = MTLRenderPipelineState>(): R;
    setDrawColorQuadState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawTextureNearestState<R = MTLRenderPipelineState>(): R;
    setDrawTextureNearestState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    drawTextureState<R = MTLRenderPipelineState>(): R;
    setDrawTextureState<R = void, P0 = MTLRenderPipelineState>(_v: P0): R;
    metalCommandQueue<R = MTLCommandQueue>(): R;
    setMetalCommandQueue<R = void, P0 = MTLCommandQueue>(_v: P0): R;
    metalLibrary<R = MTLLibrary>(): R;
    setMetalLibrary<R = void, P0 = MTLLibrary>(_v: P0): R;
    currentDrawable<R = CAMetalDrawable>(): R;
    setCurrentDrawable<R = void, P0 = CAMetalDrawable>(_v: P0): R;
    currentCommands<R = MTLCommandBuffer>(): R;
    setCurrentCommands<R = void, P0 = MTLCommandBuffer>(_v: P0): R;
    metalLayer<R = CAMetalLayer>(): R;
    setMetalLayer<R = void, P0 = CAMetalLayer>(_v: P0): R;
  }
  namespace MSMetalRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGPURendererProtocol {
      alloc<R = MSMetalRenderer>(): R;
      new: <R = MSMetalRenderer>() => R;
      createWithCompletionHandler<R = unknown, P0 = CDUnknownBlockType>(_createWithCompletionHandler: P0): R;
    }
  }
}

declare const MSMetalRenderer: cocoa.MSMetalRenderer.CLASS;
