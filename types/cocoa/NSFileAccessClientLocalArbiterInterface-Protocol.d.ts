/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessClientLocalArbiterInterfaceProtocol<T = any> extends cocoa.NSFileAccessArbiterProtocol {
    grantSubarbitrationClaim_withServer<R = void, P0 = cocoa.NSFileSubarbitrationClaim, P1 = cocoa.NSXPCListener>(_grantSubarbitrationClaim: P0, _withServer: P1): R;
    grantAccessClaim_synchronouslyIfPossible<R = cocoa.OS_dispatch_semaphore, P0 = cocoa.NSFileAccessClaim, P1 = boolean>(_grantAccessClaim: P0, _synchronouslyIfPossible: P1): R;
  }
  namespace classes {
    export interface NSFileAccessClientLocalArbiterInterfaceProtocol<T = any> extends cocoa.classes.NSFileAccessArbiterProtocol {  }
  }
}

declare const NSFileAccessClientLocalArbiterInterfaceProtocol: cocoa.classes.NSFileAccessClientLocalArbiterInterfaceProtocol;
