/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerTraitsProtocol<T = any> extends NSObjectProtocol {
    traits<R = number>(): R;
  }
  namespace classes {
    export interface MSLayerTraitsProtocol<T = any> extends NSObjectProtocol {  }
  }
}
