/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadViewController<T = any> extends cocoa.MSCloudBaseViewController {
    updateProgress<R = void>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    progressDidChangeNotification<R = void, P0 = unknown>(_progressDidChangeNotification: P0): R;
    edgeInsets<R = cocoa.NSEdgeInsets>(): R;
    arrowView<R = cocoa.MSCloudUploadArrowView>(): R;
    setArrowView<R = void, P0 = cocoa.MSCloudUploadArrowView>(_v: P0): R;
    cancelButton<R = cocoa.NSButton>(): R;
    setCancelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    progressIndicator<R = cocoa.NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    buttonStackView<R = cocoa.NSStackView>(): R;
    setButtonStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudUploadViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudUploadViewController>(): R;
      new: <R = MSCloudUploadViewController>() => R;
    }
  }
}

declare const MSCloudUploadViewController: cocoa.classes.MSCloudUploadViewController;
