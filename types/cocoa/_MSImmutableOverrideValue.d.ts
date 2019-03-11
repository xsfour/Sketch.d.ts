/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableOverrideValue<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    value<R = cocoa.NSCopying>(): R;
    setValue<R = void, P0 = cocoa.NSCopying>(_v: P0): R;
    overrideName<R = cocoa.NSString>(): R;
    setOverrideName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableOverrideValue<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableOverrideValue>(): R;
      new: <R = _MSImmutableOverrideValue>() => R;
    }
  }
}
