/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudSharesController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    startLoadingAdditionalShares<R = void>(): R;
    startLoadingShares<R = void>(): R;
    canLoadAdditionalShares<R = boolean>(): R;
    isCurrentlyLoading<R = boolean>(): R;
    shouldLoadInitialShares<R = boolean>(): R;
    shares<R = cocoa.NSArray>(): R;
    delegate<R = cocoa.MSCloudSharesControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSCloudSharesControllerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudSharesController<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSCloudSharesController>(): R;
      new: <R = MSCloudSharesController>() => R;
    }
  }
}

declare const MSCloudSharesController: cocoa.classes.MSCloudSharesController;
