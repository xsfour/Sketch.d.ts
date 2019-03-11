/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudInvalidLicenseViewController<T = any> extends cocoa.MSCloudBaseViewController {
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    learnMoreButton<R = cocoa.NSButton>(): R;
    setLearnMoreButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudInvalidLicenseViewController<T = any> extends cocoa.classes.MSCloudBaseViewController {
      alloc<R = MSCloudInvalidLicenseViewController>(): R;
      new: <R = MSCloudInvalidLicenseViewController>() => R;
    }
  }
}

declare const MSCloudInvalidLicenseViewController: cocoa.classes.MSCloudInvalidLicenseViewController;
