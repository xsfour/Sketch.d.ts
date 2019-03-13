/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGraphicsContextSettings<T = any> extends _MSGraphicsContextSettings {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGraphicsContextSettings<T = any> extends _MSGraphicsContextSettings {
      alloc<R = MSGraphicsContextSettings>(): R;
      new: <R = MSGraphicsContextSettings>() => R;
    }
  }
}

declare const MSGraphicsContextSettings: cocoa.classes.MSGraphicsContextSettings;
