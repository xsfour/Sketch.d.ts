/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSortableProtocol<T = any> extends NSObjectProtocol {
    name<R = NSString>(): R;
  }
  namespace classes {
    export interface BCSortableProtocol<T = any> extends NSObjectProtocol {  }
  }
}
