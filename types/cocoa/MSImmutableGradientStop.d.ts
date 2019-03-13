/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableGradientStop<T = any> extends _MSImmutableGradientStop {
    initWithPosition_color<R = unknown, P0 = number, P1 = unknown>(_initWithPosition: P0, _color: P1): R;
  }
  namespace classes {
    export interface MSImmutableGradientStop<T = any> extends _MSImmutableGradientStop {
      alloc<R = MSImmutableGradientStop>(): R;
      new: <R = MSImmutableGradientStop>() => R;
    }
  }
}

declare const MSImmutableGradientStop: cocoa.classes.MSImmutableGradientStop;
