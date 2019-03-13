/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderObservation<T = any> extends NSObservation {}
  namespace classes {
    export interface _NSPlaceholderObservation<T = any> extends NSObservation {
      alloc<R = _NSPlaceholderObservation>(): R;
      new: <R = _NSPlaceholderObservation>() => R;
    }
  }
}
