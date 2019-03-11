/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3ResponseObject<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    originalResponse<R = cocoa.NSHTTPURLResponse>(): R;
    setOriginalResponse<R = void, P0 = cocoa.NSHTTPURLResponse>(_v: P0): R;
    ETag<R = cocoa.NSString>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface AFAmazonS3ResponseObject<T = any> extends cocoa.classes.NSObject {
      alloc<R = AFAmazonS3ResponseObject>(): R;
      new: <R = AFAmazonS3ResponseObject>() => R;
      responseObject<R = unknown, P0 = unknown>(_responseObject: P0): R;
    }
  }
}

declare const AFAmazonS3ResponseObject: cocoa.classes.AFAmazonS3ResponseObject;
