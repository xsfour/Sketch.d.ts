/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedObject<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = MSModelObjectCommon>(): R;
    setValue<R = void, P0 = MSModelObjectCommon>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSSharedObject<T = any> extends MSModelObject {
      alloc<R = _MSSharedObject>(): R;
      new: <R = _MSSharedObject>() => R;
    }
  }
}
