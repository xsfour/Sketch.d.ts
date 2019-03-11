/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSortableProtocol<T = any> extends cocoa.NSObjectProtocol {
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface BCSortableProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCSortableProtocol: cocoa.classes.BCSortableProtocol;
