/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceItemIdentificationProtocol<T = any> {
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserInterfaceItemIdentificationProtocol<T = any> {  }
  }
}
