/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudViewController<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    refreshLicenseIfIneligible<R = void>(): R;
    resetContentViewController<R = void, P0 = unknown>(_resetContentViewController: P0): R;
    licenseDidChangeNotification<R = void, P0 = unknown>(_licenseDidChangeNotification: P0): R;
    shareDidChangeNotification<R = void, P0 = unknown>(_shareDidChangeNotification: P0): R;
    shareUploadDidChangeNotification<R = void, P0 = unknown>(_shareUploadDidChangeNotification: P0): R;
    userDidChangeNotification<R = void, P0 = unknown>(_userDidChangeNotification: P0): R;
    environmentDidChangeNotification<R = void, P0 = unknown>(_environmentDidChangeNotification: P0): R;
    updateFrame<R = void>(): R;
    animateAlpha_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_animateAlpha: P0, _completionHandler: P1): R;
    defaultContentViewController<R = unknown>(): R;
    addContentViewController<R = void, P0 = unknown>(_addContentViewController: P0): R;
    removeContentViewController<R = void, P0 = unknown>(_removeContentViewController: P0): R;
    setContentViewController_animated<R = void, P0 = unknown, P1 = boolean>(_setContentViewController: P0, _animated: P1): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
    action<R = cocoa.MSCloudAction>(): R;
    contentViewController<R = cocoa.MSCloudBaseViewController>(): R;
    setContentViewController<R = void, P0 = cocoa.MSCloudBaseViewController>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSCloudViewController>(): R;
      new: <R = MSCloudViewController>() => R;
    }
  }
}

declare const MSCloudViewController: cocoa.classes.MSCloudViewController;
