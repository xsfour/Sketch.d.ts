/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudInitialViewController<T = any> extends cocoa.MSCloudBaseViewController {
    upload<R = void, P0 = unknown>(_upload: P0): R;
    updateOrganizationButton<R = void>(): R;
    reloadOrganizations<R = void>(): R;
    organizationButton<R = cocoa.NSPopUpButton>(): R;
    setOrganizationButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    uploadButton<R = cocoa.NSButton>(): R;
    setUploadButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    organizationStackView<R = cocoa.NSStackView>(): R;
    setOrganizationStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    actionStackView<R = cocoa.NSStackView>(): R;
    setActionStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    organizations<R = cocoa.NSArray>(): R;
    setOrganizations<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudInitialViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudInitialViewController>(): R;
      new: <R = MSCloudInitialViewController>() => R;
    }
  }
}

declare const MSCloudInitialViewController: cocoa.classes.MSCloudInitialViewController;
