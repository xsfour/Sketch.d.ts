/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableOverrideValue<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = NSCopying>(): R;
    setValue<R = void, P0 = NSCopying>(_v: P0): R;
    overrideName<R = NSString>(): R;
    setOverrideName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableOverrideValue<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableOverrideValue>(): R;
      new: <R = _MSImmutableOverrideValue>() => R;
    }
  }
}
