/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUInteger<T = any> {}
  namespace classes {
    export interface NSUInteger<T = any> {  }
  }
}

declare const NSUInteger: cocoa.classes.NSUInteger;
