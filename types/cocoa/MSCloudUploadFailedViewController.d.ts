/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadFailedViewController<T = any> extends cocoa.MSCloudBaseViewController {
    retryUpload<R = void, P0 = unknown>(_retryUpload: P0): R;
    updateErrorDescription<R = void>(): R;
    retryButton<R = cocoa.NSButton>(): R;
    setRetryButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    existingShare<R = cocoa.SCKShare>(): R;
    setExistingShare<R = void, P0 = cocoa.SCKShare>(_v: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudUploadFailedViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudUploadFailedViewController>(): R;
      new: <R = MSCloudUploadFailedViewController>() => R;
    }
  }
}

declare const MSCloudUploadFailedViewController: cocoa.classes.MSCloudUploadFailedViewController;
