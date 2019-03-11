/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionRequestHandlingProtocol<T = any> extends cocoa.NSObjectProtocol {
    beginRequestWithExtensionContext<R = void, P0 = cocoa.NSExtensionContext>(_beginRequestWithExtensionContext: P0): R;
  }
  namespace classes {
    export interface NSExtensionRequestHandlingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSExtensionRequestHandlingProtocol: cocoa.classes.NSExtensionRequestHandlingProtocol;
