/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCodeSigningVerifier<T = any> extends NSObject {}
  namespace classes {
    export interface BCCodeSigningVerifier<T = any> extends NSObject {
      alloc<R = BCCodeSigningVerifier>(): R;
      new: <R = BCCodeSigningVerifier>() => R;
    }
  }
}

declare const BCCodeSigningVerifier: cocoa.classes.BCCodeSigningVerifier;
