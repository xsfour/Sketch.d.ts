/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGPURendererProtocol<T = any> {
    unlockTextures<R = void>(): R;
    lockTextures<R = void>(): R;
    requiresSynchronousRendering<R = boolean>(): R;
    layer<R = CALayer>(): R;
    createTextureWithWidth_height<R = MSGPUTexture, P0 = number, P1 = number>(_createTextureWithWidth: P0, _height: P1): R;
    resetScissorRect<R = void>(): R;
    setScissorRectWithX_y_width_height<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_setScissorRectWithX: P0, _y: P1, _width: P2, _height: P3): R;
    drawShadowForArtboardInRect_selected_shadow<R = void, P0 = CGRect, P1 = boolean, P2 = MSGPUArtboardShadow>(_drawShadowForArtboardInRect: P0, _selected: P1, _shadow: P2): R;
    drawTexturedQuadInDestinationRect_sourceTexture_sourceRect_bilinearFilter<R = void, P0 = CGRect, P1 = MSGPUTexture, P2 = CGRect, P3 = boolean>(_drawTexturedQuadInDestinationRect: P0, _sourceTexture: P1, _sourceRect: P2, _bilinearFilter: P3): R;
    drawTexturedQuadInDestinationRect_sourceTexture_bilinearFilter<R = void, P0 = CGRect, P1 = MSGPUTexture, P2 = boolean>(_drawTexturedQuadInDestinationRect: P0, _sourceTexture: P1, _bilinearFilter: P2): R;
    drawColorTriangleMesh<R = void, P0 = unknown>(_drawColorTriangleMesh: P0): R;
    drawColorQuadInRect_color<R = void, P0 = CGRect, P1 = unknown>(_drawColorQuadInRect: P0, _color: P1): R;
    endFrame<R = void>(): R;
    beginFrameWithClearColor_drawableSize_backingScaleFactor_colorSpace<R = boolean, P0 = NSColor, P1 = CGSize, P2 = number, P3 = CGColorSpace>(_beginFrameWithClearColor: P0, _drawableSize: P1, _backingScaleFactor: P2, _colorSpace: P3): R;
    scheduleDrawBlock<R = void, P0 = CDUnknownBlockType>(_scheduleDrawBlock: P0): R;
  }
  namespace classes {
    export interface MSGPURendererProtocol<T = any> {  }
  }
}
