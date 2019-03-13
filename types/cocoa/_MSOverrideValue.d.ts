/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSOverrideValue<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = NSCopying>(): R;
    setValue<R = void, P0 = NSCopying>(_v: P0): R;
    overrideName<R = NSString>(): R;
    setOverrideName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSOverrideValue<T = any> extends MSModelObject {
      alloc<R = _MSOverrideValue>(): R;
      new: <R = _MSOverrideValue>() => R;
    }
  }
}
