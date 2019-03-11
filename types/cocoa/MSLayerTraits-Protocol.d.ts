/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerTraitsProtocol<T = any> extends cocoa.NSObjectProtocol {
    traits<R = number>(): R;
  }
  namespace classes {
    export interface MSLayerTraitsProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSLayerTraitsProtocol: cocoa.classes.MSLayerTraitsProtocol;
