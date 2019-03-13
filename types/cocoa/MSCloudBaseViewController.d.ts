/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudBaseViewController<T = any> extends MSToolbarPopoverContentViewController {
    cloudBaseViewControllerDidAppear<R = void>(): R;
    cloudViewController<R = MSCloudViewController>(): R;
    cloudAction<R = MSCloudAction>(): R;
  }
  namespace classes {
    export interface MSCloudBaseViewController<T = any> extends MSToolbarPopoverContentViewController {
      alloc<R = MSCloudBaseViewController>(): R;
      new: <R = MSCloudBaseViewController>() => R;
    }
  }
}

declare const MSCloudBaseViewController: cocoa.classes.MSCloudBaseViewController;
