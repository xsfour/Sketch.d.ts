/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAOpenGLLayer<T = any> {
    // + CAOpenGLLayer(NSOpenGLInternal):
    NS_managesOpenGLDrawable<R = boolean>(): R;
  }
  namespace classes {
    export interface CAOpenGLLayer<T = any> {
      // + CAOpenGLLayer(NSOpenGLInternal):
      
    }
  }
}

declare const CAOpenGLLayer: cocoa.classes.CAOpenGLLayer;
