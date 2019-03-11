/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleStylePartsPlaceholder<T = any> extends cocoa.MSStylePart {}
  namespace classes {
    export interface MSMultipleStylePartsPlaceholder<T = any> extends cocoa.classes.MSStylePart {
      alloc<R = MSMultipleStylePartsPlaceholder>(): R;
      new: <R = MSMultipleStylePartsPlaceholder>() => R;
    }
  }
}

declare const MSMultipleStylePartsPlaceholder: cocoa.classes.MSMultipleStylePartsPlaceholder;
