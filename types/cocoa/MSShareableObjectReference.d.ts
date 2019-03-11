/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectReference<T = any> extends cocoa.NSObject, cocoa.BCSortableProtocol, cocoa.MSSharedObjectStylingProtocol {}
  namespace classes {
    export interface MSShareableObjectReference<T = any> extends cocoa.classes.NSObject, cocoa.classes.BCSortableProtocol, cocoa.classes.MSSharedObjectStylingProtocol {
      alloc<R = MSShareableObjectReference>(): R;
      new: <R = MSShareableObjectReference>() => R;
      referenceForShareableObject_inLibrary<R = unknown, P0 = cocoa.MSModelObject, P1 = unknown>(_referenceForShareableObject: P0, _inLibrary: P1): R;
    }
  }
}

declare const MSShareableObjectReference: cocoa.classes.MSShareableObjectReference;
