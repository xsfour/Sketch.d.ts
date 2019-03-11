/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCopying<T = any> {}
  namespace classes {
    export interface NSCopying<T = any> {  }
  }
}

declare const NSCopying: cocoa.classes.NSCopying;
