/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionTask<T = any> {}
  namespace classes {
    export interface NSURLSessionTask<T = any> {  }
  }
}

declare const NSURLSessionTask: cocoa.classes.NSURLSessionTask;
