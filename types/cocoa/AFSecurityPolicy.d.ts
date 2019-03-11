/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFSecurityPolicy<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    evaluateServerTrust_forDomain<R = boolean, P0 = cocoa.__SecTrust, P1 = unknown>(_evaluateServerTrust: P0, _forDomain: P1): R;
    evaluateServerTrust<R = boolean, P0 = cocoa.__SecTrust>(_evaluateServerTrust: P0): R;
    pinnedPublicKeys<R = cocoa.NSArray>(): R;
    setPinnedPublicKeys<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    validatesDomainName<R = boolean>(): R;
    setValidatesDomainName<R = void, P0 = boolean>(_v: P0): R;
    allowInvalidCertificates<R = boolean>(): R;
    setAllowInvalidCertificates<R = void, P0 = boolean>(_v: P0): R;
    pinnedCertificates<R = cocoa.NSArray>(): R;
    setPinnedCertificates<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    SSLPinningMode<R = number>(): R;
    setSSLPinningMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFSecurityPolicy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFSecurityPolicy>(): R;
      new: <R = AFSecurityPolicy>() => R;
      keyPathsForValuesAffectingPinnedPublicKeys<R = unknown>(): R;
      policyWithPinningMode<R = unknown, P0 = number>(_policyWithPinningMode: P0): R;
      defaultPolicy<R = unknown>(): R;
      defaultPinnedCertificates<R = unknown>(): R;
    }
  }
}

declare const AFSecurityPolicy: cocoa.classes.AFSecurityPolicy;
