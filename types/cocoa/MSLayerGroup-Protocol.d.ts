/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupProtocol<T = any> {
    layers<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSLayerGroupProtocol<T = any> {  }
  }
}
