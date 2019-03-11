/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyledLayerProtocol<T = any> extends cocoa.MSLayerProtocol {}
  namespace classes {
    export interface MSStyledLayerProtocol<T = any> extends cocoa.classes.MSLayerProtocol {  }
  }
}

declare const MSStyledLayerProtocol: cocoa.classes.MSStyledLayerProtocol;
