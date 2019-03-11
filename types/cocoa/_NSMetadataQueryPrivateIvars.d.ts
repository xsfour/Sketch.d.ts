/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataQueryPrivateIvars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSMetadataQueryPrivateIvars<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSMetadataQueryPrivateIvars>(): R;
      new: <R = _NSMetadataQueryPrivateIvars>() => R;
    }
  }
}
