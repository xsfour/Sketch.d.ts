/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsletterSignup<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSNewsletterSignup<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSNewsletterSignup>(): R;
      new: <R = MSNewsletterSignup>() => R;
      registerEmail<R = void, P0 = unknown>(_registerEmail: P0): R;
    }
  }
}

declare const MSNewsletterSignup: cocoa.classes.MSNewsletterSignup;
