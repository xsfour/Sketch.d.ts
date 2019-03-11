/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStylePart<T = any> extends cocoa._MSImmutableStylePart, cocoa.MSStylePartProtocol {
    isEnabled<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStylePart<T = any> extends cocoa.classes._MSImmutableStylePart, cocoa.classes.MSStylePartProtocol {
      alloc<R = MSImmutableStylePart>(): R;
      new: <R = MSImmutableStylePart>() => R;
    }
  }
}

declare const MSImmutableStylePart: cocoa.classes.MSImmutableStylePart;
