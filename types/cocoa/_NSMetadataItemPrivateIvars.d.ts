/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataItemPrivateIvars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSMetadataItemPrivateIvars<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSMetadataItemPrivateIvars>(): R;
      new: <R = _NSMetadataItemPrivateIvars>() => R;
    }
  }
}
