/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableCopying<T = any> {}
  namespace classes {
    export interface NSMutableCopying<T = any> {  }
  }
}

declare const NSMutableCopying: cocoa.classes.NSMutableCopying;
