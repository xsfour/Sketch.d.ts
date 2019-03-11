/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderReadingProtocol<T = any> extends cocoa.NSObjectProtocol {}
  namespace classes {
    export interface NSItemProviderReadingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      readableTypeIdentifiersForItemProvider<R = cocoa.NSArray>(): R;
      objectWithItemProviderData_typeIdentifier_error<R = unknown, P0 = cocoa.NSData, P1 = cocoa.NSString, P2 = unknown>(_objectWithItemProviderData: P0, _typeIdentifier: P1, _error: P2): R;
    }
  }
}

declare const NSItemProviderReadingProtocol: cocoa.classes.NSItemProviderReadingProtocol;
