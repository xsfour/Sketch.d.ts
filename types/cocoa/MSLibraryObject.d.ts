/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryObject<T = any> {}
  namespace classes {
    export interface MSLibraryObject<T = any> {  }
  }
}

declare const MSLibraryObject: cocoa.classes.MSLibraryObject;
