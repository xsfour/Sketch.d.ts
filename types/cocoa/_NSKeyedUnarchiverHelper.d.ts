/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyedUnarchiverHelper<T = any> extends NSObject {
    classNameAllowed<R = boolean, P0 = unknown>(_classNameAllowed: P0): R;
    setAllowedClassNames<R = void, P0 = unknown>(_setAllowedClassNames: P0): R;
    allowedClassNames<R = unknown>(): R;
    dealloc<R = void>(): R;
    decodeError<R = NSError>(): R;
    setDecodeError<R = void, P0 = NSError>(_v: P0): R;
  }
  namespace classes {
    export interface _NSKeyedUnarchiverHelper<T = any> extends NSObject {
      alloc<R = _NSKeyedUnarchiverHelper>(): R;
      new: <R = _NSKeyedUnarchiverHelper>() => R;
    }
  }
}
