/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSValidatedUserInterfaceItemProtocol<T = any> {
    tag<R = number>(): R;
    action<R = string>(): R;
  }
  namespace classes {
    export interface NSValidatedUserInterfaceItemProtocol<T = any> {  }
  }
}

declare const NSValidatedUserInterfaceItemProtocol: cocoa.classes.NSValidatedUserInterfaceItemProtocol;
