/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCommonProtocol<T = any> extends NSObjectProtocol {
    objectID<R = NSString>(): R;
  }
  namespace classes {
    export interface MSModelObjectCommonProtocol<T = any> extends NSObjectProtocol {  }
  }
}
