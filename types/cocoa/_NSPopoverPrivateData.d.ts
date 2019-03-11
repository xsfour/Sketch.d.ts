/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPopoverPrivateData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSPopoverPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPopoverPrivateData>(): R;
      new: <R = _NSPopoverPrivateData>() => R;
    }
  }
}
