/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudBaseViewController<T = any> extends cocoa.MSToolbarPopoverContentViewController {
    cloudBaseViewControllerDidAppear<R = void>(): R;
    cloudViewController<R = cocoa.MSCloudViewController>(): R;
    cloudAction<R = cocoa.MSCloudAction>(): R;
  }
  namespace classes {
    export interface MSCloudBaseViewController<T = any> extends cocoa.classes.MSToolbarPopoverContentViewController {
      alloc<R = MSCloudBaseViewController>(): R;
      new: <R = MSCloudBaseViewController>() => R;
    }
  }
}

declare const MSCloudBaseViewController: cocoa.classes.MSCloudBaseViewController;
