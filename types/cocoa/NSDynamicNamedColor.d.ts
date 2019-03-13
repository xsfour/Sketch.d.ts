/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicNamedColor<T = any> extends NSCatalogColor {
    resolvedColor<R = NSColor>(): R;
  }
  namespace classes {
    export interface NSDynamicNamedColor<T = any> extends NSCatalogColor {
      alloc<R = NSDynamicNamedColor>(): R;
      new: <R = NSDynamicNamedColor>() => R;
    }
  }
}

declare const NSDynamicNamedColor: cocoa.classes.NSDynamicNamedColor;
