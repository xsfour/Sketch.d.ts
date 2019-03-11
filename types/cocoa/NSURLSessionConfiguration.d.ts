/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionConfiguration<T = any> {}
  namespace classes {
    export interface NSURLSessionConfiguration<T = any> {  }
  }
}

declare const NSURLSessionConfiguration: cocoa.classes.NSURLSessionConfiguration;
