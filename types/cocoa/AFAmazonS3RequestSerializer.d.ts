/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3RequestSerializer<T = any> extends cocoa.AFHTTPRequestSerializer {
    preSignedRequestWithRequest_expiration_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_preSignedRequestWithRequest: P0, _expiration: P1, _error: P2): R;
    requestBySettingAuthorizationHeadersForRequest_error<R = unknown, P0 = unknown, P1 = unknown>(_requestBySettingAuthorizationHeadersForRequest: P0, _error: P1): R;
    setAccessKeyID_secret<R = void, P0 = unknown, P1 = unknown>(_setAccessKeyID: P0, _secret: P1): R;
    secret<R = cocoa.NSString>(): R;
    setSecret<R = void, P0 = cocoa.NSString>(_v: P0): R;
    accessKey<R = cocoa.NSString>(): R;
    setAccessKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
    useSSL<R = boolean>(): R;
    setUseSSL<R = void, P0 = boolean>(_v: P0): R;
    sessionToken<R = cocoa.NSString>(): R;
    setSessionToken<R = void, P0 = cocoa.NSString>(_v: P0): R;
    region<R = cocoa.NSString>(): R;
    setRegion<R = void, P0 = cocoa.NSString>(_v: P0): R;
    bucket<R = cocoa.NSString>(): R;
    setBucket<R = void, P0 = cocoa.NSString>(_v: P0): R;
    endpointURL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface AFAmazonS3RequestSerializer<T = any> extends cocoa.classes.AFHTTPRequestSerializer {
      alloc<R = AFAmazonS3RequestSerializer>(): R;
      new: <R = AFAmazonS3RequestSerializer>() => R;
    }
  }
}

declare const AFAmazonS3RequestSerializer: cocoa.classes.AFAmazonS3RequestSerializer;
