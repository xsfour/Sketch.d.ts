/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleReference<T = any> extends MSShareableObjectReference {
    localLocationPath<R = unknown>(): R;
    sharedObjectID<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedStyleReference<T = any> extends MSShareableObjectReference {
      alloc<R = MSSharedStyleReference>(): R;
      new: <R = MSSharedStyleReference>() => R;
    }
  }
}

declare const MSSharedStyleReference: cocoa.classes.MSSharedStyleReference;
