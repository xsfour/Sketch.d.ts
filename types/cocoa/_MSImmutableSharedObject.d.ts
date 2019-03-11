/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedObject<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = cocoa.MSImmutableModelObject>(): R;
    setValue<R = void, P0 = cocoa.MSImmutableModelObject>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSharedObject<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableSharedObject>(): R;
      new: <R = _MSImmutableSharedObject>() => R;
    }
  }
}
