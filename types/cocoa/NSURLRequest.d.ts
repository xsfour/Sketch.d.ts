/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLRequest<T = any> {}
  namespace classes {
    export interface NSURLRequest<T = any> {  }
  }
}

declare const NSURLRequest: cocoa.classes.NSURLRequest;
