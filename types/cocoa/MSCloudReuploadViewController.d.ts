/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudReuploadViewController<T = any> extends MSCloudBaseViewController {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    upload<R = void, P0 = unknown>(_upload: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    uploadButton<R = NSButton>(): R;
    setUploadButton<R = void, P0 = NSButton>(_v: P0): R;
    buttonStackView<R = NSStackView>(): R;
    setButtonStackView<R = void, P0 = NSStackView>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudReuploadViewController<T = any> extends MSCloudBaseViewController {
      alloc<R = MSCloudReuploadViewController>(): R;
      new: <R = MSCloudReuploadViewController>() => R;
    }
  }
}

declare const MSCloudReuploadViewController: cocoa.classes.MSCloudReuploadViewController;
