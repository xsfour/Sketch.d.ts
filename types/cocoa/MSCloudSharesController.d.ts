/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudSharesController<T = any> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    startLoadingAdditionalShares<R = void>(): R;
    startLoadingShares<R = void>(): R;
    canLoadAdditionalShares<R = boolean>(): R;
    isCurrentlyLoading<R = boolean>(): R;
    shouldLoadInitialShares<R = boolean>(): R;
    shares<R = NSArray>(): R;
    delegate<R = MSCloudSharesControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSCloudSharesControllerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudSharesController<T = any> extends NSObject {
      alloc<R = MSCloudSharesController>(): R;
      new: <R = MSCloudSharesController>() => R;
    }
  }
}

declare const MSCloudSharesController: cocoa.classes.MSCloudSharesController;
