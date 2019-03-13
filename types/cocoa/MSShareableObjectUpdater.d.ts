/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectUpdater<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    shareableObjectType<R = number>(): R;
    setShareableObjectType<R = void, P0 = number>(_v: P0): R;
    selectedLayers<R = MSLayerArray>(): R;
    setSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSShareableObjectUpdater<T = any> extends NSObject {
      alloc<R = MSShareableObjectUpdater>(): R;
      new: <R = MSShareableObjectUpdater>() => R;
    }
  }
}

declare const MSShareableObjectUpdater: cocoa.classes.MSShareableObjectUpdater;
