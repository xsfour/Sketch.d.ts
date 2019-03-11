/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudSharesControllerDelegateProtocol<T = any> {
    cloudSharesController_didFailLoadingWithError<R = void, P0 = cocoa.MSCloudSharesController, P1 = cocoa.NSError>(_cloudSharesController: P0, _didFailLoadingWithError: P1): R;
    cloudSharesController_didFinishLoadingShares<R = void, P0 = cocoa.MSCloudSharesController, P1 = cocoa.NSArray>(_cloudSharesController: P0, _didFinishLoadingShares: P1): R;
  }
  namespace classes {
    export interface MSCloudSharesControllerDelegateProtocol<T = any> {  }
  }
}

declare const MSCloudSharesControllerDelegateProtocol: cocoa.classes.MSCloudSharesControllerDelegateProtocol;
