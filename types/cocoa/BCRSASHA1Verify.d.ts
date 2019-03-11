/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRSASHA1Verify<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    verify<R = void>(): R;
    dealloc<R = void>(): R;
    initWithInputData_publicKey_signatureData<R = unknown, P0 = unknown, P1 = cocoa.OpaqueSecKeyRef, P2 = unknown>(_initWithInputData: P0, _publicKey: P1, _signatureData: P2): R;
    signatureData<R = cocoa.NSData>(): R;
    setSignatureData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    publicKey<R = cocoa.OpaqueSecKeyRef>(): R;
    setPublicKey<R = void, P0 = cocoa.OpaqueSecKeyRef>(_v: P0): R;
    inputData<R = cocoa.NSData>(): R;
    setInputData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    verified<R = boolean>(): R;
    setVerified<R = void, P0 = boolean>(_v: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
  }
  namespace classes {
    export interface BCRSASHA1Verify<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCRSASHA1Verify>(): R;
      new: <R = BCRSASHA1Verify>() => R;
    }
  }
}

declare const BCRSASHA1Verify: cocoa.classes.BCRSASHA1Verify;
