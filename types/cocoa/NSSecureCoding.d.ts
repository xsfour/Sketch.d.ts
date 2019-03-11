/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureCoding<T = any> {}
  namespace classes {
    export interface NSSecureCoding<T = any> {  }
  }
}

declare const NSSecureCoding: cocoa.classes.NSSecureCoding;
