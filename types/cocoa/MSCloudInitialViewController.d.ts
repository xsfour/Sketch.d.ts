/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudInitialViewController<T = any> extends MSCloudBaseViewController {
    upload<R = void, P0 = unknown>(_upload: P0): R;
    updateOrganizationButton<R = void>(): R;
    reloadOrganizations<R = void>(): R;
    organizationButton<R = NSPopUpButton>(): R;
    setOrganizationButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    uploadButton<R = NSButton>(): R;
    setUploadButton<R = void, P0 = NSButton>(_v: P0): R;
    organizationStackView<R = NSStackView>(): R;
    setOrganizationStackView<R = void, P0 = NSStackView>(_v: P0): R;
    actionStackView<R = NSStackView>(): R;
    setActionStackView<R = void, P0 = NSStackView>(_v: P0): R;
    organizations<R = NSArray>(): R;
    setOrganizations<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudInitialViewController<T = any> extends MSCloudBaseViewController {
      alloc<R = MSCloudInitialViewController>(): R;
      new: <R = MSCloudInitialViewController>() => R;
    }
  }
}

declare const MSCloudInitialViewController: cocoa.classes.MSCloudInitialViewController;
