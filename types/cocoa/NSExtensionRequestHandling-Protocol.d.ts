/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionRequestHandlingProtocol<T = any> extends NSObjectProtocol {
    beginRequestWithExtensionContext<R = void, P0 = NSExtensionContext>(_beginRequestWithExtensionContext: P0): R;
  }
  namespace classes {
    export interface NSExtensionRequestHandlingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
