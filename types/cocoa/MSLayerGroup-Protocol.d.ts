/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupProtocol<T = any> {
    layers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSLayerGroupProtocol<T = any> {  }
  }
}

declare const MSLayerGroupProtocol: cocoa.classes.MSLayerGroupProtocol;
