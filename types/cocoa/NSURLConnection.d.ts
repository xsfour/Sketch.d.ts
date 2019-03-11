/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLConnection<T = any> {}
  namespace classes {
    export interface NSURLConnection<T = any> {  }
  }
}

declare const NSURLConnection: cocoa.classes.NSURLConnection;
