/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOpenGLViewBackingLayer<T = any> extends cocoa.CALayer {
    display<R = void>(): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
  }
  namespace classes {
    export interface _NSOpenGLViewBackingLayer<T = any> extends cocoa.classes.CALayer {  }
  }
}
