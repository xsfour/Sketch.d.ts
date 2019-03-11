/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCommonProtocol<T = any> extends cocoa.NSObjectProtocol {
    objectID<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSModelObjectCommonProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSModelObjectCommonProtocol: cocoa.classes.MSModelObjectCommonProtocol;
