/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerChangeObserverProtocol<T = any> extends NSObjectProtocol {
    layerDidChange<R = void, P0 = MSLayer>(_layerDidChange: P0): R;
  }
  namespace classes {
    export interface MSLayerChangeObserverProtocol<T = any> extends NSObjectProtocol {  }
  }
}
