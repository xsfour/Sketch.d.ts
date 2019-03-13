/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageTextStyleView<T = any> extends MSManageSharedObjectBaseViewController {
    sharedObjectsSortedByName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSManageTextStyleView<T = any> extends MSManageSharedObjectBaseViewController {
      alloc<R = MSManageTextStyleView>(): R;
      new: <R = MSManageTextStyleView>() => R;
    }
  }
}

declare const MSManageTextStyleView: cocoa.classes.MSManageTextStyleView;
