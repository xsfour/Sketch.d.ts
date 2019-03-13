/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3ResponseObject<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    originalResponse<R = NSHTTPURLResponse>(): R;
    setOriginalResponse<R = void, P0 = NSHTTPURLResponse>(_v: P0): R;
    ETag<R = NSString>(): R;
    URL<R = NSURL>(): R;
  }
  namespace classes {
    export interface AFAmazonS3ResponseObject<T = any> extends NSObject {
      alloc<R = AFAmazonS3ResponseObject>(): R;
      new: <R = AFAmazonS3ResponseObject>() => R;
      responseObject<R = unknown, P0 = unknown>(_responseObject: P0): R;
    }
  }
}

declare const AFAmazonS3ResponseObject: cocoa.classes.AFAmazonS3ResponseObject;
