/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageTextStyleView<T = any> extends cocoa.MSManageSharedObjectBaseViewController {
    sharedObjectsSortedByName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSManageTextStyleView<T = any> extends cocoa.classes.MSManageSharedObjectBaseViewController {
      alloc<R = MSManageTextStyleView>(): R;
      new: <R = MSManageTextStyleView>() => R;
    }
  }
}

declare const MSManageTextStyleView: cocoa.classes.MSManageTextStyleView;
