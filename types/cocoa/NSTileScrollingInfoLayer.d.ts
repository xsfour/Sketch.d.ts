/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTileScrollingInfoLayer<T = any> extends CALayer, CALayerDelegateProtocol {
    layoutSublayers<R = void>(): R;
    _updateTileRepresentation<R = void>(): R;
    display<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    tileLayer<R = _NSTiledLayer>(): R;
    setTileLayer<R = void, P0 = _NSTiledLayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTileScrollingInfoLayer<T = any> extends CALayer, CALayerDelegateProtocol {  }
  }
}

declare const NSTileScrollingInfoLayer: cocoa.classes.NSTileScrollingInfoLayer;
