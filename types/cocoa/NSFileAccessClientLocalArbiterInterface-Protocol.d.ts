/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessClientLocalArbiterInterfaceProtocol<T = any> extends NSFileAccessArbiterProtocol {
    grantSubarbitrationClaim_withServer<R = void, P0 = NSFileSubarbitrationClaim, P1 = NSXPCListener>(_grantSubarbitrationClaim: P0, _withServer: P1): R;
    grantAccessClaim_synchronouslyIfPossible<R = OS_dispatch_semaphore, P0 = NSFileAccessClaim, P1 = boolean>(_grantAccessClaim: P0, _synchronouslyIfPossible: P1): R;
  }
  namespace classes {
    export interface NSFileAccessClientLocalArbiterInterfaceProtocol<T = any> extends NSFileAccessArbiterProtocol {  }
  }
}
