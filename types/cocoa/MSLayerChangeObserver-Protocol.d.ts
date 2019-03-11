/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerChangeObserverProtocol<T = any> extends cocoa.NSObjectProtocol {
    layerDidChange<R = void, P0 = cocoa.MSLayer>(_layerDidChange: P0): R;
  }
  namespace classes {
    export interface MSLayerChangeObserverProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSLayerChangeObserverProtocol: cocoa.classes.MSLayerChangeObserverProtocol;
