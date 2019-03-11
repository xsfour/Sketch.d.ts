/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBorderOptions<T = any> extends cocoa._MSStyleBorderOptions {
    supportsAdvancedBorderSettings<R = boolean>(): R;
    hasDashPattern<R = boolean>(): R;
  }
  namespace classes {
    export interface MSStyleBorderOptions<T = any> extends cocoa.classes._MSStyleBorderOptions {
      alloc<R = MSStyleBorderOptions>(): R;
      new: <R = MSStyleBorderOptions>() => R;
    }
  }
}

declare const MSStyleBorderOptions: cocoa.classes.MSStyleBorderOptions;
