/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONArchiveReference<T = any> extends cocoa.NSObject, cocoa.BCJSONEncodingProtocol {
    cxx_destruct<R = void>(): R;
    initWithReferenceObject<R = unknown, P0 = unknown>(_initWithReferenceObject: P0): R;
    referencedObject<R = cocoa.MSCoding>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSJSONArchiveReference<T = any> extends cocoa.classes.NSObject, cocoa.classes.BCJSONEncodingProtocol {
      alloc<R = MSJSONArchiveReference>(): R;
      new: <R = MSJSONArchiveReference>() => R;
    }
  }
}

declare const MSJSONArchiveReference: cocoa.classes.MSJSONArchiveReference;
