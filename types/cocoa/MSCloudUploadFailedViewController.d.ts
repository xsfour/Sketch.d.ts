/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadFailedViewController<T = any> extends MSCloudBaseViewController {
    retryUpload<R = void, P0 = unknown>(_retryUpload: P0): R;
    updateErrorDescription<R = void>(): R;
    retryButton<R = NSButton>(): R;
    setRetryButton<R = void, P0 = NSButton>(_v: P0): R;
    existingShare<R = SCKShare>(): R;
    setExistingShare<R = void, P0 = SCKShare>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudUploadFailedViewController<T = any> extends MSCloudBaseViewController {
      alloc<R = MSCloudUploadFailedViewController>(): R;
      new: <R = MSCloudUploadFailedViewController>() => R;
    }
  }
}

declare const MSCloudUploadFailedViewController: cocoa.classes.MSCloudUploadFailedViewController;
