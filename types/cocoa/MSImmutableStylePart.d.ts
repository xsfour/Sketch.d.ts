/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStylePart<T = any> extends _MSImmutableStylePart, MSStylePartProtocol {
    isEnabled<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStylePart<T = any> extends _MSImmutableStylePart, MSStylePartProtocol {
      alloc<R = MSImmutableStylePart>(): R;
      new: <R = MSImmutableStylePart>() => R;
    }
  }
}

declare const MSImmutableStylePart: cocoa.classes.MSImmutableStylePart;
