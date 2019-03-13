/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedLayerStyleProvider<T = any> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedLayerStyleProvider<T = any> extends MSForeignObjectProvider {
      alloc<R = MSSharedLayerStyleProvider>(): R;
      new: <R = MSSharedLayerStyleProvider>() => R;
    }
  }
}

declare const MSSharedLayerStyleProvider: cocoa.classes.MSSharedLayerStyleProvider;
