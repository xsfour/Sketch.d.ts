/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProvider<T = any> {}
  namespace classes {
    export interface NSFileProvider<T = any> {  }
  }
}

declare const NSFileProvider: cocoa.classes.NSFileProvider;
