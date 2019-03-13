/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONArchiveReference<T = any> extends NSObject, BCJSONEncodingProtocol {
    cxx_destruct<R = void>(): R;
    initWithReferenceObject<R = unknown, P0 = unknown>(_initWithReferenceObject: P0): R;
    referencedObject<R = MSCoding>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSJSONArchiveReference<T = any> extends NSObject, BCJSONEncodingProtocol {
      alloc<R = MSJSONArchiveReference>(): R;
      new: <R = MSJSONArchiveReference>() => R;
    }
  }
}

declare const MSJSONArchiveReference: cocoa.classes.MSJSONArchiveReference;
