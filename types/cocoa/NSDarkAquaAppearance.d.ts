/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDarkAquaAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSDarkAquaAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSDarkAquaAppearance>(): R;
      new: <R = NSDarkAquaAppearance>() => R;
    }
  }
}

declare const NSDarkAquaAppearance: cocoa.classes.NSDarkAquaAppearance;
