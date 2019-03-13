/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectReference<T = any> extends NSObject, BCSortableProtocol, MSSharedObjectStylingProtocol {}
  namespace classes {
    export interface MSShareableObjectReference<T = any> extends NSObject, BCSortableProtocol, MSSharedObjectStylingProtocol {
      alloc<R = MSShareableObjectReference>(): R;
      new: <R = MSShareableObjectReference>() => R;
      referenceForShareableObject_inLibrary<R = unknown, P0 = MSModelObject, P1 = unknown>(_referenceForShareableObject: P0, _inLibrary: P1): R;
    }
  }
}

declare const MSShareableObjectReference: cocoa.classes.MSShareableObjectReference;
