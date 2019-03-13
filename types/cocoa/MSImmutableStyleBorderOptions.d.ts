/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBorderOptions<T = any> extends _MSImmutableStyleBorderOptions {
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    CGLineCap<R = number>(): R;
    CGLineJoin<R = number>(): R;
    hasDashPattern<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableStyleBorderOptions<T = any> extends _MSImmutableStyleBorderOptions {
      alloc<R = MSImmutableStyleBorderOptions>(): R;
      new: <R = MSImmutableStyleBorderOptions>() => R;
    }
  }
}

declare const MSImmutableStyleBorderOptions: cocoa.classes.MSImmutableStyleBorderOptions;
