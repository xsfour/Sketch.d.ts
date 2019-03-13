/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBeepSuppressor<T = any> extends NSObject {}
  namespace classes {
    export interface MSBeepSuppressor<T = any> extends NSObject {
      alloc<R = MSBeepSuppressor>(): R;
      new: <R = MSBeepSuppressor>() => R;
      failSilentlyInBlock<R = void, P0 = CDUnknownBlockType>(_failSilentlyInBlock: P0): R;
      setShouldSuppressBeep<R = void, P0 = boolean>(_setShouldSuppressBeep: P0): R;
      shouldSuppressBeep<R = boolean>(): R;
    }
  }
}

declare const MSBeepSuppressor: cocoa.classes.MSBeepSuppressor;
