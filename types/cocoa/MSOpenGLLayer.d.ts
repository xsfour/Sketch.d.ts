/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpenGLLayer<T = any> extends cocoa.NSOpenGLLayer {
    cxx_destruct<R = void>(): R;
    shareContext<R = cocoa.NSOpenGLContext>(): R;
    setShareContext<R = void, P0 = cocoa.NSOpenGLContext>(_v: P0): R;
    renderBlock<R = cocoa.CDUnknownBlockType>(): R;
    setRenderBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface MSOpenGLLayer<T = any> extends cocoa.classes.NSOpenGLLayer {  }
  }
}

declare const MSOpenGLLayer: cocoa.classes.MSOpenGLLayer;
