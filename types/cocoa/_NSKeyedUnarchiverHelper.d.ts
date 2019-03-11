/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyedUnarchiverHelper<T = any> extends cocoa.NSObject {
    classNameAllowed<R = boolean, P0 = unknown>(_classNameAllowed: P0): R;
    setAllowedClassNames<R = void, P0 = unknown>(_setAllowedClassNames: P0): R;
    allowedClassNames<R = unknown>(): R;
    dealloc<R = void>(): R;
    decodeError<R = cocoa.NSError>(): R;
    setDecodeError<R = void, P0 = cocoa.NSError>(_v: P0): R;
  }
  namespace classes {
    export interface _NSKeyedUnarchiverHelper<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSKeyedUnarchiverHelper>(): R;
      new: <R = _NSKeyedUnarchiverHelper>() => R;
    }
  }
}
