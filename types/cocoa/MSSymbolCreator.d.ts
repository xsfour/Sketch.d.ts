/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolCreator<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSSymbolCreator<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSSymbolCreator>(): R;
      new: <R = MSSymbolCreator>() => R;
      createSymbolInstanceWithName_rect_symbolID<R = unknown, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown>(_createSymbolInstanceWithName: P0, _rect: P1, _symbolID: P2): R;
      createSymbolMasterWitName_size_onPage<R = unknown, P0 = unknown, P1 = cocoa.CGSize, P2 = unknown>(_createSymbolMasterWitName: P0, _size: P1, _onPage: P2): R;
      moveLayers_toArtboard<R = void, P0 = unknown, P1 = unknown>(_moveLayers: P0, _toArtboard: P1): R;
      createSymbolFromLayers_withName_onSymbolsPage<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_createSymbolFromLayers: P0, _withName: P1, _onSymbolsPage: P2): R;
      canCreateSymbolFromLayers<R = boolean, P0 = unknown>(_canCreateSymbolFromLayers: P0): R;
    }
  }
}

declare const MSSymbolCreator: cocoa.classes.MSSymbolCreator;
