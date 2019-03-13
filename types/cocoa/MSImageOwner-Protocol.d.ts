/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOwnerProtocol<T = any> {
    setReducedImage<R = void, P0 = MSImageData>(_setReducedImage: P0): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = CGSize>(): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSImageOwnerProtocol<T = any> {  }
  }
}
