/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedObject<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = cocoa.MSModelObjectCommon>(): R;
    setValue<R = void, P0 = cocoa.MSModelObjectCommon>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSSharedObject<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSSharedObject>(): R;
      new: <R = _MSSharedObject>() => R;
    }
  }
}
