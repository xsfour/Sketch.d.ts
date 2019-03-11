/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SwiftObject<T = any> {}
  namespace classes {
    export interface SwiftObject<T = any> {  }
  }
}

declare const SwiftObject: cocoa.classes.SwiftObject;
