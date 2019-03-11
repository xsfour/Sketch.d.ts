/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectProtocol<T = any> extends cocoa.MSModelObjectCommonProtocol {}
  namespace classes {
    export interface MSModelObjectProtocol<T = any> extends cocoa.classes.MSModelObjectCommonProtocol {  }
  }
}

declare const MSModelObjectProtocol: cocoa.classes.MSModelObjectProtocol;
