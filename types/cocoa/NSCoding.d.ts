/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoding<T = any> {}
  namespace classes {
    export interface NSCoding<T = any> {  }
  }
}

declare const NSCoding: cocoa.classes.NSCoding;
