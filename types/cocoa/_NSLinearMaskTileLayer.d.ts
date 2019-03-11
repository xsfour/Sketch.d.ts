/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskTileLayer<T = any> extends cocoa._NSLinearMaskLayer {
    drawInContext<R = void, P0 = cocoa.CGContext>(_drawInContext: P0): R;
  }
  namespace classes {
    export interface _NSLinearMaskTileLayer<T = any> extends cocoa.classes._NSLinearMaskLayer {  }
  }
}
