/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDashCheckingResult<T = any> extends cocoa.NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace classes {
    export interface NSDashCheckingResult<T = any> extends cocoa.classes.NSSubstitutionCheckingResult {
      alloc<R = NSDashCheckingResult>(): R;
      new: <R = NSDashCheckingResult>() => R;
    }
  }
}

declare const NSDashCheckingResult: cocoa.classes.NSDashCheckingResult;
