/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSTextStyle<T = any> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    verticalAlignment<R = number>(): R;
    setVerticalAlignment<R = void, P0 = number>(_v: P0): R;
    encodedAttributes<R = NSDictionary>(): R;
    setEncodedAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _MSTextStyle<T = any> extends MSModelObject {
      alloc<R = _MSTextStyle>(): R;
      new: <R = _MSTextStyle>() => R;
    }
  }
}
