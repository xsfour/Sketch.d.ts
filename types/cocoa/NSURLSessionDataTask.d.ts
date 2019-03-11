/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDataTask<T = any> {}
  namespace classes {
    export interface NSURLSessionDataTask<T = any> {  }
  }
}

declare const NSURLSessionDataTask: cocoa.classes.NSURLSessionDataTask;
