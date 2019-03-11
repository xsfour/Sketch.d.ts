/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSession<T = any> {}
  namespace classes {
    export interface NSURLSession<T = any> {  }
  }
}

declare const NSURLSession: cocoa.classes.NSURLSession;
