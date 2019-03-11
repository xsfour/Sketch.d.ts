/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderObservation<T = any> extends cocoa.NSObservation {}
  namespace classes {
    export interface _NSPlaceholderObservation<T = any> extends cocoa.classes.NSObservation {
      alloc<R = _NSPlaceholderObservation>(): R;
      new: <R = _NSPlaceholderObservation>() => R;
    }
  }
}
