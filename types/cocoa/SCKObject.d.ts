/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKObject<T = any> {
    // + SCKObject(Representable):
    localizedUpdatedTimeComponentsString<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface SCKObject<T = any> {
      // + SCKObject(Representable):
      
    }
  }
}

declare const SCKObject: cocoa.classes.SCKObject;
