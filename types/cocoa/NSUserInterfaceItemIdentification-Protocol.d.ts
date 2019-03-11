/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceItemIdentificationProtocol<T = any> {
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceItemIdentificationProtocol<T = any> {  }
  }
}

declare const NSUserInterfaceItemIdentificationProtocol: cocoa.classes.NSUserInterfaceItemIdentificationProtocol;
