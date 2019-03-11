/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudReuploadViewController<T = any> extends cocoa.MSCloudBaseViewController {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    upload<R = void, P0 = unknown>(_upload: P0): R;
    cancelButton<R = cocoa.NSButton>(): R;
    setCancelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    uploadButton<R = cocoa.NSButton>(): R;
    setUploadButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    buttonStackView<R = cocoa.NSStackView>(): R;
    setButtonStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudReuploadViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudReuploadViewController>(): R;
      new: <R = MSCloudReuploadViewController>() => R;
    }
  }
}

declare const MSCloudReuploadViewController: cocoa.classes.MSCloudReuploadViewController;
