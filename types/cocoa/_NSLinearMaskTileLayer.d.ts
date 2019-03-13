/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskTileLayer<T = any> extends _NSLinearMaskLayer {
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
  }
  namespace classes {
    export interface _NSLinearMaskTileLayer<T = any> extends _NSLinearMaskLayer {  }
  }
}
