/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSOverrideValue<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = cocoa.NSCopying>(): R;
    setValue<R = void, P0 = cocoa.NSCopying>(_v: P0): R;
    overrideName<R = cocoa.NSString>(): R;
    setOverrideName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSOverrideValue<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSOverrideValue>(): R;
      new: <R = _MSOverrideValue>() => R;
    }
  }
}
