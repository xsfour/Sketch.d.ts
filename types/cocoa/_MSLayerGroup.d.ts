/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSLayerGroup<T = any> extends cocoa.MSStyledLayer {
    moveLayerIndex_toIndex<R = void, P0 = number, P1 = number>(_moveLayerIndex: P0, _toIndex: P1): R;
    removeAllLayers<R = void>(): R;
    removeLayersAtIndexes<R = void, P0 = unknown>(_removeLayersAtIndexes: P0): R;
    removeLayerAtIndex<R = void, P0 = number>(_removeLayerAtIndex: P0): R;
    removeLayer<R = void, P0 = unknown>(_removeLayer: P0): R;
    insertLayers_afterLayer<R = void, P0 = unknown, P1 = unknown>(_insertLayers: P0, _afterLayer: P1): R;
    insertLayer_afterLayer<R = void, P0 = unknown, P1 = unknown>(_insertLayer: P0, _afterLayer: P1): R;
    insertLayers_beforeLayer<R = void, P0 = unknown, P1 = unknown>(_insertLayers: P0, _beforeLayer: P1): R;
    insertLayer_beforeLayer<R = void, P0 = unknown, P1 = unknown>(_insertLayer: P0, _beforeLayer: P1): R;
    insertLayer_atIndex<R = void, P0 = unknown, P1 = number>(_insertLayer: P0, _atIndex: P1): R;
    addLayers<R = void, P0 = unknown>(_addLayers: P0): R;
    addLayer<R = void, P0 = unknown>(_addLayer: P0): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    sharedObjectID<R = cocoa.NSString>(): R;
    setSharedObjectID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    hasClickThrough<R = boolean>(): R;
    setHasClickThrough<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSLayerGroup<T = any> extends cocoa.classes.MSStyledLayer {
      alloc<R = _MSLayerGroup>(): R;
      new: <R = _MSLayerGroup>() => R;
    }
  }
}
