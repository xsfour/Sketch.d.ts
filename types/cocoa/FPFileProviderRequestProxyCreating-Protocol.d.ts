/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FPFileProviderRequestProxyCreatingProtocol<T = any> extends NSObjectProtocol {
    fetchProxyForItemIdentifier_completionHandler<R = void, P0 = NSString, P1 = CDUnknownBlockType>(_fetchProxyForItemIdentifier: P0, _completionHandler: P1): R;
  }
  namespace classes {
    export interface FPFileProviderRequestProxyCreatingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
