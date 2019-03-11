/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleReference<T = any> extends cocoa.MSShareableObjectReference {
    localLocationPath<R = unknown>(): R;
    sharedObjectID<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedStyleReference<T = any> extends cocoa.classes.MSShareableObjectReference {
      alloc<R = MSSharedStyleReference>(): R;
      new: <R = MSSharedStyleReference>() => R;
    }
  }
}

declare const MSSharedStyleReference: cocoa.classes.MSSharedStyleReference;
