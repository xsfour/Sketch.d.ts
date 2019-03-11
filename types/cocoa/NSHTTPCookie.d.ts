/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHTTPCookie<T = any> {
    // + NSHTTPCookie(NSHTTPCookiePortCoding):
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace classes {
    export interface NSHTTPCookie<T = any> {
      // + NSHTTPCookie(NSHTTPCookiePortCoding):
      
    }
  }
}

declare const NSHTTPCookie: cocoa.classes.NSHTTPCookie;
