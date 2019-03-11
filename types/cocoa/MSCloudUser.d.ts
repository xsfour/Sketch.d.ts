/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUser<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    parseDictionary<R = void, P0 = unknown>(_parseDictionary: P0): R;
    verifiedUser<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    webAccessToken<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
    isVerified<R = boolean>(): R;
    isAdmin<R = boolean>(): R;
    pendingEmail<R = cocoa.NSString>(): R;
    email<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    dictionary<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface MSCloudUser<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = MSCloudUser>(): R;
      new: <R = MSCloudUser>() => R;
      userWithIdentifier_verified<R = unknown, P0 = unknown, P1 = boolean>(_userWithIdentifier: P0, _verified: P1): R;
    }
  }
}

declare const MSCloudUser: cocoa.classes.MSCloudUser;
