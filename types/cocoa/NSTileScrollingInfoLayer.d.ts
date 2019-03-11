/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTileScrollingInfoLayer<T = any> extends cocoa.CALayer, cocoa.CALayerDelegateProtocol {
    layoutSublayers<R = void>(): R;
    _updateTileRepresentation<R = void>(): R;
    display<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    tileLayer<R = cocoa._NSTiledLayer>(): R;
    setTileLayer<R = void, P0 = cocoa._NSTiledLayer>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTileScrollingInfoLayer<T = any> extends cocoa.classes.CALayer, cocoa.classes.CALayerDelegateProtocol {  }
  }
}

declare const NSTileScrollingInfoLayer: cocoa.classes.NSTileScrollingInfoLayer;
