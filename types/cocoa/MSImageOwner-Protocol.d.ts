/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOwnerProtocol<T = any> {
    setReducedImage<R = void, P0 = cocoa.MSImageData>(_setReducedImage: P0): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = cocoa.CGSize>(): R;
    image<R = cocoa.MSImageData>(): R;
    setImage<R = void, P0 = cocoa.MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSImageOwnerProtocol<T = any> {  }
  }
}

declare const MSImageOwnerProtocol: cocoa.classes.MSImageOwnerProtocol;
