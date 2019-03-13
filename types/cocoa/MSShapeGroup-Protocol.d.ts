/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeGroupProtocol<T = any> {
    isPartOfClippingMask<R = boolean>(): R;
    hasMarkers<R = boolean>(): R;
  }
  namespace classes {
    export interface MSShapeGroupProtocol<T = any> {  }
  }
}
