/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStylePart<T = any> extends cocoa.MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStylePart<T = any> extends cocoa.classes.MSModelObject {
      alloc<R = _MSStylePart>(): R;
      new: <R = _MSStylePart>() => R;
    }
  }
}
