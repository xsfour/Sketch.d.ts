/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCartoucheMaskLayer<T = any> extends CALayer {
    layout_side_cartoucheSize_radius<R = void, P0 = number, P1 = number, P2 = CGSize, P3 = number>(_layout: P0, _side: P1, _cartoucheSize: P2, _radius: P3): R;
    initWithRadius_image_scaleFactor<R = unknown, P0 = number, P1 = unknown, P2 = number>(_initWithRadius: P0, _image: P1, _scaleFactor: P2): R;
  }
  namespace classes {
    export interface _NSCartoucheMaskLayer<T = any> extends CALayer {  }
  }
}
