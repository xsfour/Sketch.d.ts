/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextStyleProvider<T = any> extends MSForeignObjectProvider {
    objectType<R = number>(): R;
    foreignObjects<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedTextStyleProvider<T = any> extends MSForeignObjectProvider {
      alloc<R = MSSharedTextStyleProvider>(): R;
      new: <R = MSSharedTextStyleProvider>() => R;
    }
  }
}

declare const MSSharedTextStyleProvider: cocoa.classes.MSSharedTextStyleProvider;
