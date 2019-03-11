/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicNamedColor<T = any> extends cocoa.NSCatalogColor {
    resolvedColor<R = cocoa.NSColor>(): R;
  }
  namespace classes {
    export interface NSDynamicNamedColor<T = any> extends cocoa.classes.NSCatalogColor {
      alloc<R = NSDynamicNamedColor>(): R;
      new: <R = NSDynamicNamedColor>() => R;
    }
  }
}

declare const NSDynamicNamedColor: cocoa.classes.NSDynamicNamedColor;
