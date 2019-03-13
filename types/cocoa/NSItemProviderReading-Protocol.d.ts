/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderReadingProtocol<T = any> extends NSObjectProtocol {}
  namespace classes {
    export interface NSItemProviderReadingProtocol<T = any> extends NSObjectProtocol {
      readableTypeIdentifiersForItemProvider<R = NSArray>(): R;
      objectWithItemProviderData_typeIdentifier_error<R = unknown, P0 = NSData, P1 = NSString, P2 = unknown>(_objectWithItemProviderData: P0, _typeIdentifier: P1, _error: P2): R;
    }
  }
}
