/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FPFileProviderRequestProxyCreatingProtocol<T = any> extends cocoa.NSObjectProtocol {
    fetchProxyForItemIdentifier_completionHandler<R = void, P0 = cocoa.NSString, P1 = cocoa.CDUnknownBlockType>(_fetchProxyForItemIdentifier: P0, _completionHandler: P1): R;
  }
  namespace classes {
    export interface FPFileProviderRequestProxyCreatingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const FPFileProviderRequestProxyCreatingProtocol: cocoa.classes.FPFileProviderRequestProxyCreatingProtocol;
