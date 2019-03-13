/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureUnarchiveFromDataTransformer<T = any> extends NSValueTransformer {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSecureUnarchiveFromDataTransformer<T = any> extends NSValueTransformer {
      alloc<R = NSSecureUnarchiveFromDataTransformer>(): R;
      new: <R = NSSecureUnarchiveFromDataTransformer>() => R;
      allowedTopLevelClasses<R = unknown>(): R;
    }
  }
}

declare const NSSecureUnarchiveFromDataTransformer: cocoa.classes.NSSecureUnarchiveFromDataTransformer;
